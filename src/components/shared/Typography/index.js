import styled from 'styled-components';

const Typography = styled.p`
  font-size: ${props => props.variant == 'title' && props.theme.fontSizes.title || props.variant == 'subtitle' && props.theme.fontSizes.subtitle};
  text-align: ${props => props.alignText && props.alignText};
  color: ${props => props.theme.colors.grey};
`;

export default Typography;
