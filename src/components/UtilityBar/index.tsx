import * as React from 'react';
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
      <FilterButtonWrapper>filter</FilterButtonWrapper>
      <AddButtonWrapper>add</AddButtonWrapper>
    </UtilityBarWrapper>
  );
};

export default UtilityBar;