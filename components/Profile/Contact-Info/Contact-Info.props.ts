import { ContainerProps } from "@mui/material";

/**
 * ContactInfo Props
 */
interface ContactInfoProps extends ContainerProps {
  contactInfo: Array<{
    phone: string;
    address: string;
    email: string;
  }>;
}

export type { ContactInfoProps };
