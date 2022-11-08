import React, { FC } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { SxProps } from "@mui/material";

const RedditIcon: FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <SvgIcon sx={sx}>
      <path d="M21.6001 12.12C21.6001 10.92 20.6401 9.95998 19.4401 10.08C18.9601 10.08 18.3601 10.32 18.0001 10.68C16.3201 9.59998 14.4001 8.87998 12.3601 8.87998L13.3201 4.31998L16.4401 5.03998C16.4401 5.87998 17.1601 6.47998 18.0001 6.47998C18.8401 6.47998 19.4401 5.75998 19.4401 4.91998C19.4401 4.07998 18.7201 3.47998 17.8801 3.47998C17.2801 3.47998 16.8001 3.83998 16.5601 4.31998L13.2001 3.47998H12.9601C12.8401 3.47998 12.8401 3.59998 12.8401 3.71998L11.6401 8.87998C9.60012 8.87998 7.68012 9.47998 6.00012 10.68C5.16012 9.83998 3.84012 9.83998 3.00012 10.68C2.16012 11.52 2.16012 12.84 3.00012 13.68C3.12012 13.8 3.36012 14.04 3.60012 14.04V14.64C3.60012 17.88 7.32012 20.52 12.0001 20.52C16.6801 20.52 20.4001 17.88 20.4001 14.64V14.04C21.1201 13.68 21.6001 12.96 21.6001 12.12V12.12ZM7.20012 13.68C7.20012 12.84 7.92012 12.24 8.64012 12.24C9.48012 12.24 10.0801 12.96 10.0801 13.68C10.0801 14.4 9.36012 15.12 8.64012 15.12C7.80012 15.12 7.20012 14.52 7.20012 13.68ZM15.6001 17.64C14.5201 18.36 13.3201 18.84 12.0001 18.72C10.6801 18.72 9.48012 18.36 8.40012 17.64C8.28012 17.52 8.28012 17.28 8.40012 17.04C8.52012 16.92 8.76012 16.92 8.88012 17.04C9.72012 17.64 10.8001 18 11.8801 17.88C12.9601 18 14.0401 17.64 14.8801 17.04C15.0001 16.92 15.2401 16.92 15.4801 17.04C15.7201 17.16 15.7201 17.4 15.6001 17.64ZM15.2401 15.12C14.4001 15.12 13.8001 14.4 13.8001 13.68C13.8001 12.96 14.5201 12.24 15.2401 12.24C16.0801 12.24 16.6801 12.96 16.6801 13.68C16.8001 14.52 16.0801 15.12 15.2401 15.12Z" />
    </SvgIcon>
  );
};

export default RedditIcon;