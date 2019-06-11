import React, { useContext } from 'react';
import Button from 'components/Button';
import { Checkbox } from 'antd';
import ManagementListStore from 'components/ManagementList/context';
import {
  ManagementItemWrapper,
  SyntheticRowWrapper,
  HeaderRowWrapper,
  ManagementItemLabels,
  ManagementItemName,
  ManagementItemHost,
  SyntheticRowHeader,
  ManagementItemURL,
  LabelWrapper,
  ManagementItemOptions,
  ManagementItemSelected,
  P,
} from './style';
import { Synthetic } from 'api/models/synthetic';

/*
ManagementItem
Responsible for rendering a dynamic row item which holds a number of columns, these rows will be rendered within a
ManagementList, the list is capability of filtering, labeling, adding, and other manipulation options on the rendered rows
The ManagementItem, as well as ManagementList should be re-usable in that they should be usable in the following contexts:

* List of synthetic checks
  | Name | Host | URL | Interval | Labels
* List of performance checks
  | Name | Host | Users | Duration | Labels
* List of configured alerts
  | Name | Condition | Sink | Labels
* List of alert actions
  | Name | ... |
* List of resources
  | Name | type | 
* List of status items

These examples all may have a different number of columns depending on use-case, and we need to support this dynamic behavior.
It must also be capable of collapsing the columns depending on window size, where we can summarise/collapse where required.

The component should also provide a mechanism for being made responsible for an asynchronous fetch of data, as part of  
a collection of other rows fetching data.

Will take a payload of data and deserialised into a rendered row, these payloads will be made available through both the 
context API/redux and stored on the given backend for future interactions.

The solution will need to subscribed to a shared state, where this state is managed/initialised in the ManagementList component
[1] https://medium.com/crowdbotics/how-to-use-usereducer-in-react-hooks-for-performance-optimization-ecafca9e7bf5
[2] https://github.com/diegohaz/constate
*/
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
const getRowLayout = (type: string, rowConfiguration: any) => {
  return rowConfiguration[type].layout.order
    .reduce((acc: Array<string>, item: any) => {
      acc.push(rowConfiguration[type].layout[item].width);
      return acc;
    }, [])
    .join(' ');
};
interface ILabels {
  labels: Array<any>;
}
const Labels: React.FC<ILabels> = ({ labels }) => (
  <ManagementItemLabels>
    {labels.map((label, index) => (
      <LabelWrapper key={`${label.value}-${index}`} color={label.color}>
        {label.value}
      </LabelWrapper>
    ))}
  </ManagementItemLabels>
);
type rowType = 'SYNTHETIC' | 'PERFORMANCE';
interface IRow {
  type: rowType;
  data?: undefined | Synthetic;
}
const Row: React.SFC<IRow> = props => {
  const { data, type } = props;
  const { state, dispatch } = useContext(ManagementListStore);
  console.log('Row:', state);
  switch (type) {
    case SYNTHETIC:
      return data ? (
        <SyntheticRowWrapper
          columnLayout={getRowLayout(type, rowConfiguration)}
        >
          <ManagementItemSelected>
            <Checkbox
              onChange={() =>
                dispatch({
                  type: 'TOGGLE_SELECTED',
                  payload: data._id,
                })
              }
            />
          </ManagementItemSelected>
          <ManagementItemName>
            <P>{data.metadata.name}</P>
          </ManagementItemName>
          <ManagementItemHost>
            <P>{data.target.host}</P>
          </ManagementItemHost>
          <ManagementItemURL>
            <P>{data.target.url}</P>
          </ManagementItemURL>
          <Labels labels={data.metadata.labels} />
          <ManagementItemOptions>
            <Button
              hoverColor="blue"
              gridarea="edit"
              type="edit"
              color="black"
            />
            <Button
              hoverColor="red"
              gridarea="delete"
              type="delete"
              color="black"
            />
          </ManagementItemOptions>
        </SyntheticRowWrapper>
      ) : (
        <SyntheticRowHeader>header goes here</SyntheticRowHeader>
      );
    default:
      return <HeaderRowWrapper />;
  }
};

interface IManagementItem {
  type: rowType;
  data?: undefined | Synthetic;
}

const ManagementItem: React.FC<IManagementItem> = props => {
  return (
    <ManagementItemWrapper>
      <Row type={props.type} data={props.data} />
    </ManagementItemWrapper>
  );
};

export default ManagementItem;
