import Link from "next/link";
import styled from 'styled-components';

export const TelegramLink = () => {
    return <Link
        href='https://t.me/orbitNFT'
    >
        <Telegram/>
    </Link>
}

export const Telegram = styled.div`
  background: url("/telegram.svg");
  width: 48px;
  height: 48px;
  position: absolute;
  left: 20px;
  bottom: 10px;
  cursor: pointer;
`;