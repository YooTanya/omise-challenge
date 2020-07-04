import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.div`
  background-image: ${(props) => `url('${props.url}')`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
`;

Image.propTypes = {
  url: PropTypes.string,
};

export default Image;
