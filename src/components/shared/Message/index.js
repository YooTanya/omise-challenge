import styled from 'styled-components';

const Message = styled.div`
  background-color: ${props => props.success ? props.theme.colors.success: props.theme.colors.failed};
  border-radius: 4px;
  color: white;
  font-weight: bold;
  padding: 2rem 4rem;
  margin: 2rem 0;
`;


export default Message;
