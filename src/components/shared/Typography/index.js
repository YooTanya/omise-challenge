import styled from 'styled-components';

const Typography = styled.p`
  font-size: ${props => props.variant == 'title' && props.theme.fontSizes.title};
  text-align: ${props => props.alignText && props.alignText};
  color: ${props => props.variant == 'title' ? props.theme.colors.grey: 'inherit'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
`;

export default Typography;
