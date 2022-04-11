import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const Content = styled.div`
  border: solid 1px var(--grey-300);
  border-radius: 20px;
  padding: 5px 15px;

  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 100%;
    height: 30px;
    border: 0;
    color: var(--grey-300);

    &::placeholder {
      color: var(--grey-300);
    }
  }

  svg {
    color: var(--grey-300);
  }
`;
