import { ContainerProps } from "@mui/material";

/**
 * Personal Props
 */
interface PersonalProps extends ContainerProps {
  personalInfo: {
    firstName: string;
    lastName: string;
    location: string;
    position: string;
  };
}

export type { PersonalProps };
