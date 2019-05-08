import styled from 'theme';

export const DashboardWrapper = styled.div`
  display: grid;
  background: ${props => props.theme.backgroundColor};
  grid-template-columns: ${props => props.theme.width} 1fr;
  grid-template-rows: 100px 70px 80px 50px 1fr;
  grid-template-areas:
    'logo top-nav'
    'collapse content'
    'theme content'
    'nav content'
    'nav content';
`;

export const NavBarCollapseButton = styled.div`
    grid-area: collapse;
    height: 70px;
    padding-top: 10px;
    width: ${props => props.theme.width};
    background: ${props => props.theme.backgroundColor};
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: center;
    vertical-align: middle;
    text-align: center;
`;
