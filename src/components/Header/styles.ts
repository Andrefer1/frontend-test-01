import styled from "styled-components";

export const Container = styled.div`
  outline: solid 1px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  outline: solid 1px red;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  img {
    width: 120px;
  }
`;
