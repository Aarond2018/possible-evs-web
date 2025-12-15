import { Icon } from "./type";

const CalenderLine: Icon = ({ size = "24", ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7.5 0.833008V2.49967H12.5V0.833008H14.1667V2.49967H17.5C17.9602 2.49967 18.3333 2.87277 18.3333 3.33301V16.6663C18.3333 17.1266 17.9602 17.4997 17.5 17.4997H2.5C2.03976 17.4997 1.66666 17.1266 1.66666 16.6663V3.33301C1.66666 2.87277 2.03976 2.49967 2.5 2.49967H5.83333V0.833008H7.5ZM16.6667 9.16634H3.33333V15.833H16.6667V9.16634ZM5.83333 4.16634H3.33333V7.49967H16.6667V4.16634H14.1667V5.83301H12.5V4.16634H7.5V5.83301H5.83333V4.16634Z"
      fill="currentColor"
    />
  </svg>
);

export default CalenderLine;
