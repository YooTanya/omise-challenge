import styled from 'styled-components';

const Thumbnail = styled.div`
  background-color: white;
  border-radius: 5px;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 6px 0px;
  margin: 16px;
  position: relative;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 6px 0px;
  }
`;

export default Thumbnail;
