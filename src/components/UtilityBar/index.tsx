import React, { useState } from 'react';

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
  const [ addSelected, setAddSelected ] = useState(false)
  return (
    <UtilityBarWrapper>
      <DisableButtonWrapper>
        <Button type="stop" fontSize={24} />
      </DisableButtonWrapper>
      <DeleteButtonWrapper>
        <Button type="delete" fontSize={24} />
      </DeleteButtonWrapper>
      <InformationWrapper>information</InformationWrapper>
      <FilterButtonWrapper>
        <Button type="control" fontSize={24} />
      </FilterButtonWrapper>
      <AddButtonWrapper selected={addSelected} onMouseEnter={() => setAddSelected(true)} onMouseLeave={() => setAddSelected(false)}>
        <Button type="plus" fontSize={24} color="white" />
      </AddButtonWrapper>
    </UtilityBarWrapper>
  );
};

export default UtilityBar;
