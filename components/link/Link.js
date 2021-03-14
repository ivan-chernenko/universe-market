import styled from "styled-components";
import Link from "next/Link";

export const StyledButtonLink = styled.a`
  box-sizing: border-box;
  text-decoration: none;
  width: 258px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  color: #C8C8C8;
  border: 1px solid #C8C8C8;
  box-shadow: 0 0 20px #C8C8C8;
  border-radius: 5px;
  font-size: 24px;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const ButtonLink = ({href, title}) => <Link href={href}>
    <StyledButtonLink prefetch href={href}>
        {title}
    </StyledButtonLink>
</Link>;