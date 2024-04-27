/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react'
import { IIconProps } from '@portal/shared/utils/types'

const SwapIcon = ({ className, hover }: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    className={`${className} transition-all duration-300 ease-linear`}
  >
    <path
      d="M18.6666 9.99994C18.6666 9.73472 18.5613 9.48037 18.3738 9.29283C18.1862 9.1053 17.9319 8.99994 17.6666 8.99994H6.07664L8.37664 6.70994C8.56495 6.52164 8.67073 6.26624 8.67073 5.99994C8.67073 5.73364 8.56495 5.47825 8.37664 5.28994C8.18834 5.10164 7.93295 4.99585 7.66664 4.99585C7.40034 4.99585 7.14495 5.10164 6.95664 5.28994L2.95664 9.28994C2.81789 9.43057 2.72389 9.60914 2.68652 9.80313C2.64914 9.99712 2.67006 10.1978 2.74664 10.3799C2.82166 10.5626 2.94906 10.7189 3.11278 10.8292C3.2765 10.9396 3.46922 10.999 3.66664 10.9999H17.6666C17.9319 10.9999 18.1862 10.8946 18.3738 10.707C18.5613 10.5195 18.6666 10.2652 18.6666 9.99994ZM22.5866 13.6199C22.5116 13.4373 22.3842 13.281 22.2205 13.1707C22.0568 13.0603 21.8641 13.0009 21.6666 12.9999H7.66664C7.40143 12.9999 7.14707 13.1053 6.95954 13.2928C6.772 13.4804 6.66664 13.7347 6.66664 13.9999C6.66664 14.2652 6.772 14.5195 6.95954 14.707C7.14707 14.8946 7.40143 14.9999 7.66664 14.9999H19.2566L16.9566 17.2899C16.8629 17.3829 16.7885 17.4935 16.7378 17.6154C16.687 17.7372 16.6608 17.8679 16.6608 17.9999C16.6608 18.132 16.687 18.2627 16.7378 18.3845C16.7885 18.5064 16.8629 18.617 16.9566 18.7099C17.0496 18.8037 17.1602 18.8781 17.2821 18.9288C17.4039 18.9796 17.5346 19.0057 17.6666 19.0057C17.7987 19.0057 17.9294 18.9796 18.0512 18.9288C18.1731 18.8781 18.2837 18.8037 18.3766 18.7099L22.3766 14.7099C22.5154 14.5693 22.6094 14.3907 22.6468 14.1968C22.6841 14.0028 22.6632 13.8021 22.5866 13.6199Z"
      fill={hover ? 'url(#paint0_linear_128_1595)' : 'custom-white40'}
      fillOpacity="0.4"
    />
  </svg>
)
export default SwapIcon