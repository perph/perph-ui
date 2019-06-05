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
`;
