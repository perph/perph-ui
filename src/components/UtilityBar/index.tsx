import * as React from 'react';

import Button from 'components/Button';
import {
  UtilityBarWrapper,
  DisableButtonWrapper,
  DeleteButtonWrapper,
  FilterButtonWrapper,
  InformationWrapper,
  AddButtonWrapper,
} from './style';

export interface IUtilityBarProps {}

const UtilityBar: React.FC<IUtilityBarProps> = props => {
  return (
    <UtilityBarWrapper>
      <DisableButtonWrapper>disable</DisableButtonWrapper>
      <DeleteButtonWrapper>delete</DeleteButtonWrapper>
      <InformationWrapper>information</InformationWrapper>
      <FilterButtonWrapper>
        <Button type="control" style={{ fontSize: 25 }} />
      </FilterButtonWrapper>
      <AddButtonWrapper>
        <Button type="plus" style={{ 'stroke-width': '10px' }} />
      </AddButtonWrapper>
    </UtilityBarWrapper>
  );
};

export default UtilityBar;
