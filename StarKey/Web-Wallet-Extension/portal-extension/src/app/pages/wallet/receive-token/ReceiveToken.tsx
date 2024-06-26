import { Avatar } from '@nextui-org/react'
import { useStore } from '@portal/shared/hooks/useStore'
import { NetworkToken } from '@portal/shared/utils/types'
import CustomThumbnail from '@src/app/components/CustomThumbnail'
import { CustomTypography, TokenAddressButton } from 'app/components'
import SinglePageTitleLayout from 'layouts/single-page-layout/SinglePageLayout'
import { createLocationState } from 'lib/woozie'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { QRCode } from 'react-qrcode-logo'
import hrLogo from '../../../../../public/images/qr_logo.png'

const ReceiveToken = () => {
  const { t } = useTranslation()
  const { getNetworkToken } = useStore()

  const { pathname } = createLocationState()
  const [symbol, setSymbol] = useState<string>('')
  const paths = pathname.split('/')

  const assetId: string = paths[paths.length - 3]

  const asset: NetworkToken = getNetworkToken(assetId)
  const walletAddress = asset.address
  const website = asset.explorerAccountURL.replace('$tx', walletAddress)

  useEffect(() => {
    const [, query] = window.location.href.split('#')[1].split('?')
    const params = Object.fromEntries(new URLSearchParams(query))
    setSymbol(params.symbol)
  }, [])

  return (
    <SinglePageTitleLayout showMenu>
      <div
        className="p-5 flex flex-col items-center justify-center rounded-[1.75rem] gap-y-6 text-center h-full"
        style={{
          background: 'url(./images/backgrounds/rec-token-bg.svg) no-repeat center',
          backgroundSize: 'cover',
        }}
      >
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-center mx-auto rounded-full">
            {!asset.image ? (
              <CustomThumbnail thumbName={asset.title} className="w-10 h-10 mr-2" />
            ) : (
              <Avatar
                src={asset.image}
                alt={asset.title}
                className="rounded-full w-10 h-10 mr-2 overflow-hidden bg-custom-white"
              />
            )}
          </div>
          <CustomTypography variant="h2" className="pl-2 text-left break-all">
            {t('Token.receiveToken', { token: symbol })}
          </CustomTypography>
        </div>

        <div className="flex w-full flex-col items-center space-y-4">
          {walletAddress && (
            <>
              <div className="rounded-[2rem] p-[0.7rem] h-[13rem] w-[13rem] bg-custom-white">
                <QRCode
                  size={165}
                  value={walletAddress}
                  logoImage={hrLogo}
                  qrStyle="dots"
                  eyeRadius={8}
                  logoPadding={5}
                  removeQrCodeBehindLogo={true}
                  viewBox={`0 0 160 160`}
                />
              </div>
              <TokenAddressButton address={walletAddress} enableCopy link={website} />
            </>
          )}

          <CustomTypography className="dark:text-custom-white80" variant="small">
            {t('Token.receiveTokenInstruction', { token: asset.title })}
          </CustomTypography>
        </div>
      </div>
    </SinglePageTitleLayout>
  )
}

export default ReceiveToken
