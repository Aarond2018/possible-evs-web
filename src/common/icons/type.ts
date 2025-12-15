import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
  fill?: string;
  stroke?: string;
  width?: string | number;
  height?: string | number;
}

export type Icon = React.FunctionComponent<IconProps>;
