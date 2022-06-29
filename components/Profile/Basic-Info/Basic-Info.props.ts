import { ContainerProps } from "@mui/material";

/**
 * BasicInfo Props
 */
interface BasicInfoProps extends ContainerProps {
  basicInfo: Array<{
    birthday: string;
    gender: string;
  }>;
}

export type { BasicInfoProps };
