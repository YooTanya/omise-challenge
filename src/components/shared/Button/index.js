import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  border: 2px solid ${props => props.theme.colors.main};
  border-radius: 4px;
  color: ${props => props.theme.colors.main};
  font-weight: bold;
  padding: 8px;
  text-align: center;
  height: 48px;
  width: 100px;
  min-width: 100px;
  cursor: pointer;
  outline: none;
  box-shadow: none;

  &:hover {
    background-color: ${props => props.theme.colors.main};
    color: white;
    border: none;
  }
  
  &:active {
    background-color: ${props => props.theme.colors.secondary};
    color: white;
  }
`;

export default Button;
