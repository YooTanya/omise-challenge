import styled from 'styled-components';

const CloseButton = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  &:hover {
    color: ${props => props.theme.colors.main};
  }
  &:active {
    color: ${props => props.theme.colors.secondary};
  }
`;

export default CloseButton;
