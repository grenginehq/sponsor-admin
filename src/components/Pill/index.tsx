import { StyledPill } from "./styles";

interface PillProps {
  label: string;
  variant: "Success" | "Pending" | "Failed";
  style?: React.CSSProperties;
}

export const Pill = ({ label, variant, style }: PillProps) => {
  return (
    <StyledPill style={style} variant={variant}>
      {label}
    </StyledPill>
  );
};
