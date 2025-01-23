import styled from "styled-components";
import { linkStyles } from "../../constants/linkStyles";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  ${({ variant }) => linkStyles[variant] || linkStyles.primary}
`;
