import styled from 'theme';

export const UtilityBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
`;

export const DeleteButtonWrapper = styled.div`
  width: 30px;
  height: 30px;
  background: red;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
`;
export const DisableButtonWrapper = styled.div`
  width: 30px;
  height: 30px;
  background: red;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
`;
export const InformationWrapper = styled.div`
  width: 140px;
  height: 30px;
  background: red;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: auto;
`;
export const FilterButtonWrapper = styled.div`
  width: 30px;
  height: 30px;
  background: red;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 10px;
`;

interface IAddButtonWrapper {
  selected: boolean;
}
export const AddButtonWrapper = styled.div<IAddButtonWrapper>`
  width: 30px;
  height: 30px;
  background: #4caf50;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  margin-right: 20px;
  margin-bottom: ${({ selected }) => (selected ? `5px` : 0)};
  ${({ selected }) =>
    selected &&
    `
    -webkit-box-shadow: 0px 2px 5px 0px rgba(232, 232, 232, 1);
    -moz-box-shadow: 0px 2px 5px 0px rgba(232, 232, 232, 1);
    box-shadow: 0px 2px 5px 0px rgba(232, 232, 232, 1);
  `}
`;
