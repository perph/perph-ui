import styled from 'theme';

interface IButtonWrapper {
  gridarea?: string;
}
export const ButtonWrapper = styled.div<IButtonWrapper>`
  ${({ gridarea }) =>
    gridarea &&
    `
    grid-area: ${gridarea};
  `}
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
