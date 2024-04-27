import React from 'react'
import { IIconProps } from '@portal/shared/utils/types'

const KeyGradientIcon = ({ className }: IIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.7071 1.29289C21.3166 0.902369 20.6834 0.902369 20.2929 1.29289L11.3346 10.2512C10.26 9.465 8.93367 9 7.5 9C3.91015 9 1 11.9101 1 15.5C1 19.0899 3.91015 22 7.5 22C11.0899 22 14 19.0899 14 15.5C14 14.0663 13.535 12.74 12.7488 11.6654L15.5 8.91421L17.7929 11.2071C17.9804 11.3946 18.2348 11.5 18.5 11.5C18.7652 11.5 19.0196 11.3946 19.2071 11.2071L22.7071 7.7071C23.0976 7.31658 23.0976 6.68341 22.7071 6.29289L20.4142 4L21.7071 2.70711C22.0976 2.31658 22.0976 1.68342 21.7071 1.29289ZM19 5.41421L20.5858 6.99999L18.5 9.08579L16.9142 7.5L19 5.41421ZM7.5 11C8.74292 11 9.86655 11.5026 10.682 12.318C11.4974 13.1335 12 14.2571 12 15.5C12 17.9853 9.98528 20 7.5 20C5.01472 20 3 17.9853 3 15.5C3 13.0147 5.01472 11 7.5 11Z"
      fill="url(#paint0_linear_8970_10587)"
    />
    <defs>
      <linearGradient id="paint0_linear_8970_10587" x1="23" y1="11.5" x2="1" y2="11.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DA8FFF" />
        <stop offset="0.260417" stopColor="#F63190" />
        <stop offset="0.645833" stopColor="#9A47CF" />
        <stop offset="1" stopColor="#95CEE7" />
      </linearGradient>
    </defs>
  </svg>
)
export default KeyGradientIcon
