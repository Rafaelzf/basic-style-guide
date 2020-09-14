import styled from "styled-components";

interface ContainerProps {
  backgroundColor: string;
  hoverColor: string;
}

export const Container = styled.button<ContainerProps>`
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
`;
