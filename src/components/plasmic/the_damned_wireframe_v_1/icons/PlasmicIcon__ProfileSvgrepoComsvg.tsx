// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ProfileSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ProfileSvgrepoComsvgIcon(props: ProfileSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      xmlSpace={"preserve"}
      viewBox={"0 0 1000 1000"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M314.45 13.44l-4.21 3.45 2.3 58.76c1.34 32.35 1.72 61.06 1.15 63.55-1.91 7.85-9.76 8.23-23.16 1.15-6.32-3.25-13.78-5.93-16.65-5.93-10.34 0-10.14 3.06 3.64 65.46l12.82 58 .96 65.08 1.15 65.08 9 25.46c11.48 32.16 18.18 46.13 32.35 67.38 14.74 22.01 37.52 44.79 58.95 58.95 9.19 5.93 16.46 11.87 16.27 12.82-.19 1.15-.96 5.93-1.72 10.72l-1.15 9-29.09.77c-24.69.76-31.39 1.72-44.6 5.93-18.38 6.13-34.45 16.27-48.04 30.24-16.65 17.23-105.27 135.52-112.55 150.06-11.1 22.59-12.44 30.82-12.44 81.92 0 59.15 3.45 73.12 24.12 100.87 13.59 17.99 40.2 36.56 58.76 41.15l5.17 1.34v-44.6c0-40.96.38-45.36 3.83-50.92 10.14-16.65 30.24-18.38 44.02-3.45l4.79 5.17.96 49 .96 49.19 187.19.57 187 .38v-45.55c0-43.45.19-45.94 4.4-53.98 10.34-20.1 36.75-20.1 47.47 0 3.25 5.93 3.64 11.48 3.64 52.06 0 52.25-1.91 48.04 19.91 42.49 31.58-8.23 60.48-31.01 75.41-59.53 12.63-24.5 14.17-34.07 13.4-88.62-.57-44.98-.76-47.47-5.55-60.68-2.87-7.66-8.42-18.76-12.44-24.88-11.52-17.21-117.94-144.3-126.74-151.19-11.48-9.19-30.63-19.14-43.45-22.59-6.32-1.72-21.82-3.83-34.45-4.4l-22.78-1.34-1.53-7.66c-.76-4.21-1.91-9.57-2.49-11.87-.77-3.45 1.72-5.93 14.93-15.12 21.25-14.93 40.39-34.84 55.7-57.61 14.16-21.63 20.29-34.07 31.96-66.61l8.23-22.97.77-96.66c.38-67.76 0-100.1-1.53-108.14-7.27-37.32-36.75-70.82-74.65-84.79l-14.36-5.17-78.67-.57-78.86-.58-17.8-22.78c-21.82-27.75-29.09-31.2-35.22-16.46-2.68 6.13-5.93 8.81-11.29 8.81-1.34 0-13.4-9-26.8-20.1C334.73 19.57 322.29 10 320.18 10c-.76 0-3.44 1.53-5.73 3.44z"
        }
      ></path>
    </svg>
  );
}

export default ProfileSvgrepoComsvgIcon;
/* prettier-ignore-end */
