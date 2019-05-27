import React from 'react';
import { ManagementItemWrapper } from './style';

/*
ManagementItem
Responsible for rendering a dynamic row item which holds a number of columns, these rows will be rendered within a
ManagementList, the list is capability of filtering, labeling, adding, and other manipulation options on the rendered rows
The ManagementItem, as well as ManagementList should be re-usable in that they should be usable in the following contexts:

* List of synthetic checks
* List of performance checks
* List of configured alerts
* List of alert actions
* List of resources
* List of status items

These examples all may have a different number of columns depending on use-case, and we need to support this dynamic behavior.
It must also be capable of collapsing the columns depending on window size, where we can summarise/collapse where required.

The component should also provide a mechanism for being made responsible for an asynchronous fetch of data, as part of  
a collection of other rows fetching data.

Will take a payload of data and deserialised into a rendered row, these payloads will be made available through both the 
context API/redux and stored on the given backend for future interactions.
*/
interface SyntheticRow {

}
interface PerformanceRow {

}
interface AlertRow {

}
interface ResourceRow {

}
interface StatusRow {

}
export interface IManagementItemProps {
}

const ManagementItem: React.FC<IManagementItemProps> = (props) => {
    return (
      <ManagementItemWrapper>
        Management Item goes here
      </ManagementItemWrapper>
    );
}

export default ManagementItem;