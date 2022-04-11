import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Content = styled.div`
  max-width: 1200px;
  border-bottom: solid 1px var(--grey-300);
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  img {
    width: 120px;
  }
`;
