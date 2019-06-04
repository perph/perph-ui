import * as React from 'react';
import { Synthetic } from 'api/models/synthetic';
import { ManagementListWrapper } from './style';
import ManagementItem from 'components/ManagementItem';
type rowType = 'SYNTHETIC' | 'PERFORMANCE';
export interface IManagementListProps {
  items?: Array<Synthetic | undefined>;
  type: rowType;
}
export function ManagementList(props: IManagementListProps) {
  const { type } = props;
  const items = props.items
    ? props.items.map((item, index) => (
        <ManagementItem
          key={`${index}-management-item`}
          type={type}
          data={item}
        />
      ))
    : null;
  return <ManagementListWrapper>{items}</ManagementListWrapper>;
}
