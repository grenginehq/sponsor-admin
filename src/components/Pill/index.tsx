import { StyledPill } from "./styles";

interface PillProps {
  label: string;
  variant: "Success" | "Pending" | "Failed";
}

export const Pill = ({ label, variant }: PillProps) => {
  return <StyledPill variant={variant}>{label}</StyledPill>;
};
