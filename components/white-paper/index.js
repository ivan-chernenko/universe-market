import Link from "next/link";
import styled from 'styled-components';

export const WhitePaperLink = () => {
    return <Link
        href='https://goo.su/4Unj'
    >
        <WhitePaper/>
    </Link>
};

export const WhitePaper = styled.div`
  background: url("/documents.png");
  width: 48px;
  height: 48px;
  background-size: 48px 48px;
  position: absolute;
  left: 78px;
  bottom: 10px;
  cursor: pointer;
`;