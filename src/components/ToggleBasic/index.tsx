import React, { useState } from 'react';
import { ToggleButtonOn, ToggleButtonOff, SwitchInput } from './style';

const noop = () => {};
interface IToggleBasic {}
const ToggleBasic: React.FC<IToggleBasic> = props => {
  const [on, setOn] = useState(true);
  return <Switch onClick={() => setOn(!on)} on={on} />;
};

interface ISwitch {
  onClick: () => void;
  on: boolean;
  ariaLabel?: string;
}
const Switch: React.FunctionComponent<ISwitch> = ({
  on,
  onClick,
  ariaLabel,
  ...props
}) => {
  return (
    <label aria-label={ariaLabel || 'Toggle'} style={{ display: 'block' }}>
      <SwitchInput
        type="checkbox"
        checked={on}
        onChange={noop}
        onClick={onClick}
        data-testid="toggle-input"
      />
      {on ? <ToggleButtonOn /> : <ToggleButtonOff />}
    </label>
  );
};

export default ToggleBasic;
