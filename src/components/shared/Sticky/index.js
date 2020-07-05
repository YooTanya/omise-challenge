import styled from 'styled-components';

const Sticky = styled.div`
  background-color: ${props => props.theme.colors.main};
  width: 100%;
  position: fixed;
  bottom: 0;
  color: white;
  padding: 1rem 3rem;
`;

export default Sticky;
