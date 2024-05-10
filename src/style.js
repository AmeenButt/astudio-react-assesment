import { keyframes } from "@emotion/react";

export const closeSidebar = keyframes`
  from {
    width: 320px;
  }
  to {
    width: 0;
  }
`;
export const openSidebar = keyframes`
  from {
    width: 0px;
  }
  to {
    width: 320px;
  }
`;