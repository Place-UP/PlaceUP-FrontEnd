import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 65%;
  margin-left: 2%;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px;
  bottom: 3%;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  background-color: transparent;
`;

export const Icone = styled.i`
  color: #929191;
  cursor: pointer;
` 