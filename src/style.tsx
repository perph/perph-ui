import styled from 'theme';

interface IAppWrapper {}
export const AppWrapper = styled.div`
  height: 100%;
  background: ${props => props.theme.background};
`;
