import { LinkProps } from "../Link/Link.props";
import { StackProps } from "../Stack/Stack.props";

/**
 * NavBar Props
 */
interface NavBarProps extends StackProps {
  links: Array<LinkProps>;
}

export type { NavBarProps };
