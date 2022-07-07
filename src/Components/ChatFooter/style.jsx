import styled from "styled-components";

const Media = {
  Tablet: "@media(max-width: 768px)",
}

export const Container = styled.div`
  position: absolute;
  width: 65%;
  margin-left: 2%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.cards};
  padding: 10px;
  bottom: 3%;
  color: ${({ theme }) => theme.fontColor};
  
  svg {
    width: 25px;
    height: 25px;
  }

  ${Media.Tablet}{
    width: 85%;
    margin-left: 8%;
    bottom: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  color: ${({ theme }) => theme.fontColor};
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  color: ${({ theme }) => theme.fontColor};
  background-color: transparent;
`;

export const Icone = styled.i`
  color: #929191;
  cursor: pointer;
` 