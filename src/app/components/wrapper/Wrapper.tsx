import type { FC } from "react";

import "./Wrapper.css";

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};
