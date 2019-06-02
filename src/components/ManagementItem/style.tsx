import styled from 'theme';

export const ManagementItemWrapper = styled.div`
  display: grid;
  height: 50px;
  width: 100%;
`;
export const SyntheticRowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 50px;
  grid-template-areas: 'name host url labels options';
`;
export const SyntheticRowHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 50px;
  grid-template-areas: 'name host url labels options';
`;
export const HeaderRowWrapper = styled.div``;
export const ManagementItemName = styled.div`
  grid-area: name;
`;
export const ManagementItemHost = styled.div`
  grid-area: host;
`;
export const ManagementItemURL = styled.div`
  grid-area: url;
`;
export const ManagementItemLabels = styled.div`
  grid-area: labels;
`;
export const ManagementItemOptions = styled.div`
  grid-area: options;
`;
export const ManagementItemLargeColumn = styled.div``;

interface ILabelWrapper {
  color?: string;
}
export const LabelWrapper = styled.div<ILabelWrapper>`
  background: ${props => props.color};
`;