import styled from 'styled-components';

export const TopNavWrapper = styled.div`
  display: grid;
  grid-template-areas: 'logo navbar';
  grid-template-columns: 140px 1fr;
  background: gray;
`;

export const LogoWrapper = styled.div`
  grid-area: logo;
  width: 140px;
  display: flex;
  justify-content: center;
`;
