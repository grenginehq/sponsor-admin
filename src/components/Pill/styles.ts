import styled from "@emotion/styled";
import {
  green01,
  green02,
  red01,
  red02,
  yellow01,
  yellow02,
} from "../../styles/abstracts/colors";

export const StyledPill = styled.div<{
  variant: "Success" | "Pending" | "Failed";
}>`
  padding: 0px 8px;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.variant === "Success" ? green01 : props?.variant === "Pending" ? yellow01 : red01)};
  color: ${(props) => (props.variant === "Success" ? green02 : props?.variant === "Pending" ? yellow02 : red02)};
  border-radius: 50px;
  font-size: 12px;
  font-weight: 400;
  width: fit-content;
  height: 23px;
`;
