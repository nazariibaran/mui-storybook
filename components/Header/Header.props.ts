import { LinkProps } from "../Link/Link.props";
import { GridProps as GridMUIProps } from "@mui/material";

/**
 * Header Props
 */
interface HeaderProps extends GridMUIProps {
  navLinks?: Array<LinkProps>;
  pageTitle?: string;
}

export type { HeaderProps };
