import React, { useReducer } from 'react';
import { Synthetic } from 'api/models/synthetic';
import UtilityBar from 'components/UtilityBar';
import { ManagementListWrapper, UtilityBarWrapper, ListContent } from './style';
import ManagementListStore from './context';
import ManagementItem from 'components/ManagementItem';

type rowType = 'SYNTHETIC' | 'PERFORMANCE';

let SYNTHETIC = 'SYNTHETIC';
// let PERFORMANCE = 'PERFORMANCE';
let rowConfiguration = {
  SYNTHETIC: {
    layout: {
      order: ['selected', 'name', 'host', 'url', 'labels', 'options'],
      selected: {
        width: '40px',
      },
      name: {
        width: '1fr',
      },
      host: {
        width: '2fr',
      },
      url: {
        width: '1fr',
      },
      labels: {
        width: '1fr',
      },
      options: {
        width: '50px',
      },
    },
  },
  // PERFORMANCE: {},
};
const managementListInit = (initialState: any) => ({
  rowConfiguration: initialState,
  selectedItems: [],
});

const managementListReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'TOGGLE_SELECTED':
      if (!action.payload) {
        return state;
      }
      if (state.selectedItems.includes(action.payload)) {
        return {
          ...state,
          selectedItems: state.selectedItems.filter(
            (item: any) => item !== action.payload
          ),
        };
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      };
    default:
      throw new Error();
  }
};

interface IManagementListUtilityBar {

}
interface IManagementListProps {
  items?: Array<Synthetic | undefined>;
  type: rowType;
}
export function ManagementList(props: IManagementListProps) {
  const { type } = props;
  const [state, dispatch] = useReducer(
    managementListReducer,
    rowConfiguration,
    managementListInit
  );
  console.log(state);
  const items = props.items
    ? props.items.map((item, index) => (
        <ManagementItem
          key={`${index}-management-item`}
          type={type}
          data={item}
        />
      ))
    : null;
  return (
    <ManagementListStore.Provider value={{ state, dispatch }}>
      <ManagementListWrapper>
        <UtilityBarWrapper><UtilityBar /></UtilityBarWrapper>
        <ListContent>{items}</ListContent>
      </ManagementListWrapper>
    </ManagementListStore.Provider>
  );
}

export default ManagementList;
