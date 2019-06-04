import styled from 'theme';

export const ManagementListWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'utility'
    'content';
  grid-template-rows: 50px 1fr;
`;

export const UtilityBarWrapper = styled.div`
  grid-area: utility;
  width: 100%;
  background: gray;
`;
export const ListContent = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
