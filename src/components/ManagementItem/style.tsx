import styled from 'theme';

export const ManagementItemWrapper = styled.div`
  display: grid;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(232, 232, 232, 1);
  -moz-box-shadow: 0px 2px 5px 0px rgba(232, 232, 232, 1);
  box-shadow: 0px 2px 5px 0px rgba(232, 232, 232, 1);
  font-family: 'Prompt', sans-serif;
  text-align: center;
  margin: 5px 0 5px 0;
  padding: 5px;
  &:hover {
    transform: scale(1.02);
    transition-duration: 0.1s;
  }
`;
interface ISyntheticRowWrapper {
  columnLayout: string;
}
export const SyntheticRowWrapper = styled.div<ISyntheticRowWrapper>`
  display: grid;
  grid-template-columns: ${props => props.columnLayout};
  grid-template-areas: 'selected name host url labels options';
  column-width: 150px;
  column-gap: 10px;
`;
export const SyntheticRowHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 50px;
  grid-template-areas: 'name host url labels options';
`;
export const HeaderRowWrapper = styled.div``;
export const ManagementItemName = styled.div`
  grid-area: name;
  width: 100%;
  &:after {
    content: '';
    width: 2px;
    height: 64%;
    border-right: 1px solid gray;
  }
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const ManagementItemHost = styled.div`
  grid-area: host;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;
  min-width: 0;
  &:after {
    content: '';
    width: 2px;
    height: 64%;
    border-right: 1px solid gray;
  }
`;
export const P = styled.p`
  width: 100%;
  margin: 0 4px 0 4px;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ManagementItemURL = styled.div`
  grid-area: url;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;
  min-width: 0;

  &:after {
    content: '';
    width: 2px;
    height: 64%;
    border-right: 1px solid gray;
  }
`;
export const ManagementItemLabels = styled.div`
  grid-area: labels;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const ManagementItemOptions = styled.div`
  grid-area: options;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-areas:
    'edit'
    'delete';
`;
export const ManagementItemSelected = styled.div`
  grid-area: selected;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;
`;

export const ManagementItemOptionsDelete = styled.div`
  grid-area: delete;
`;
export const ManagementItemOptionsEdit = styled.div`
  grid-area: edit;
`;
export const ManagementItemLargeColumn = styled.div``;

interface ILabelWrapper {
  color?: string;
}
export const LabelWrapper = styled.div<ILabelWrapper>`
  background: ${props => props.color};
  max-width: 150px;
  min-width: 40px;
  margin: 0 3px 0 3px;
  padding: 0 5px 0 5px;
  height: 20px;
  color: black;
  justify-content: center;
  font-family: 'Prompt', sans-serif;
  text-align: center;
  border-radius: 30px;
`;
