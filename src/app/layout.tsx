import { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import "@/public/styles/globals.css";

export const metadata: Metadata = {
  title: "ShadCN UI Exercise",
  description: "ShadCN UI Exercise Application",
};

const RootLayout: FC<Readonly<PropsWithChildren>> = ({ children }): JSX.Element => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;

