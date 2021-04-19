import styled from "styled-components";

export const CardLine = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 200px 200px 200px;
  padding: 200px 200px;
  grid-column-gap: calc((100% - 600px) / 2);
  grid-row-gap: 200px;
  
  @media(max-width: 1000px) {
    padding: 200px 100px;
  }
  
  @media(max-width: 750px) {
    grid-template-columns: 200px 200px;
    grid-column-gap: calc(100% - 400px);
  }
  
  @media(max-width: 600px) {
    grid-template-columns: 200px;
    padding: 200px calc((100% - 200px) / 2);
  }
`;