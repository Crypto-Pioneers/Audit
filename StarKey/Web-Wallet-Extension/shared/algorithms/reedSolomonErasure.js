export default class ReedSolomonErasure {
  constructor(exports) {
    this.exports = exports
    this.memoryCache = null
    this.RESULT_OK = 0
  }

  /**
   * For asynchronous instantiation, primarily in Browser environment, expects you to load WASM file with `fetch()`
   */
  static async fromResponse(source) {
    // @ts-ignore WebAssembly.instantiateStreaming is not known by TypeScript yet
    const { instance } = await WebAssembly.instantiateStreaming(source)
    return new ReedSolomonErasure(instance.exports)
  }
  /**
   * For synchronous instantiation, primarily in Node.js environment
   */
  static fromBytes(bytes) {
    const module = new WebAssembly.Module(bytes)
    const instance = new WebAssembly.Instance(module)
    return new ReedSolomonErasure(instance.exports)
  }
  /**
   * Takes a contiguous array of bytes that contain space for `data_shards + parity_shards` shards with `data_shards` shards containing data and fills
   * additional `parity_shards` with parity information that can be later used to reconstruct data in case of corruption
   *
   * @param shards
   * @param dataShards
   * @param parityShards
   *
   * @returns One of `RESULT_*` constants; if `RESULT_OK` then parity shards were updated in `shards` in-place
   */
  encode(shards, dataShards, parityShards) {
    const exports = this.exports
    const shardsLength = shards.length
    const shardsPointer = exports.__wbindgen_malloc(shardsLength)
    this.getUint8Memory().set(shards, shardsPointer)
    const shardSize = shardsLength / (dataShards + parityShards)
    const result = exports.encode(shardsPointer, shardsLength, dataShards, parityShards)
    if (result === this.RESULT_OK) {
      shards.set(
        this.getUint8Memory().subarray(shardsPointer + shardSize * dataShards, shardsPointer + shardsLength),
        shardSize * dataShards
      )
    }
    exports.__wbindgen_free(shardsPointer, shardsLength)
    return result
  }
  /**
   * Takes a contiguous array of bytes that contain `data_shards + parity_shards` shards and tries to reconstruct data shards if they are broken and whenever
   * possible using information from `shards_available` (contains `data_shards + parity_shards` boolean values, each of which is either `true` if shard is not
   * corrupted or `false` if it is)
   *
   * @param shards
   * @param dataShards
   * @param parityShards
   * @param shardsAvailable
   *
   * @returns One of `RESULT_*` constants; if `RESULT_OK` then data shards were reconstructed in `shards` in-place
   */
  reconstruct(shards, dataShards, parityShards, shardsAvailable) {
    const exports = this.exports
    const shardsLength = shards.length
    const shardsPointer = exports.__wbindgen_malloc(shardsLength)
    this.getUint8Memory().set(shards, shardsPointer)
    const shardsAvailableLength = shardsAvailable.length
    const shardsAvailablePointer = exports.__wbindgen_malloc(shardsAvailableLength)
    this.getUint8Memory().set(
      shardsAvailable.map((value) => (value ? 1 : 0)),
      shardsAvailablePointer
    )
    const shardSize = shardsLength / (dataShards + parityShards)
    console.log(
      'exports.reconstruct :::: ',
      shardsPointer,
      shardsLength,
      dataShards,
      parityShards,
      shardsAvailablePointer,
      shardsAvailableLength
    )

    const result = exports.reconstruct(
      shardsPointer,
      shardsLength,
      dataShards,
      parityShards,
      shardsAvailablePointer,
      shardsAvailableLength
    )
    if (result === this.RESULT_OK) {
      shards.set(this.getUint8Memory().subarray(shardsPointer, shardsPointer + shardSize * dataShards))
    }
    exports.__wbindgen_free(shardsLength)
    exports.__wbindgen_free(shardsAvailableLength)
    return result
  }
  getUint8Memory() {
    let cachegetUint8Memory = null
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== this.exports.memory.buffer) {
      cachegetUint8Memory = new Uint8Array(this.exports.memory.buffer)
      this.memoryCache = cachegetUint8Memory
    }
    return cachegetUint8Memory
  }
}
