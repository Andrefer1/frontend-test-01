import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  #addChart {
    font-size: 70px;
    float: right;
    transition: filter 0.2s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
`;
