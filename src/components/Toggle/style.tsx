import styled from '../../theme';

export const ToggleButtonOn = styled.span`
  box-sizing: initial;
  display: inline-block;
  outline: 0;
  width: 8em;
  height: 4em;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: #fbfbfb;
  border-radius: 4em;
  padding: 4px;
  transition: all 0.4s ease;
  border: 2px solid #e8eae9;
  background: #86d993;
  /* &::after {
    box-sizing: initial;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
      inset 0px 0px 0px 3px #9c9c9c;
    left: 50%; 
  } */

  &:focus {
    box-sizing: initial;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
      inset 0px 0px 0px 3px #9c9c9c;
    left: 50%;  
  }
  
  &:active::after {
    box-sizing: initial;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
      inset 0px 0px 0px 3px #9c9c9c;
    left: 50%;
    margin-left: -1.6em;
  }
  &::after {
    left: 0;
    float: left;
    position: relative;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    border-radius: 4em;
    background: #fbfbfb;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      padding 0.3s ease, margin 0.3s ease;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
  }
  &:active {
    box-shadow: none;
  }
`;
export const ToggleButtonOff = styled.span`
  box-sizing: initial;
  display: inline-block;
  outline: 0;
  width: 8em;
  height: 4em;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: #fbfbfb;
  border-radius: 4em;
  padding: 4px;
  transition: all 0.4s ease;
  border: 2px solid #e8eae9;
  &::after {
    float: right;
    right: 0;
    position: relative;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    border-radius: 4em;
    background: #fbfbfb;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      padding 0.3s ease, margin 0.3s ease;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
  }
  &:active::after {
    box-sizing: initial;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
      inset 0px 0px 0px 3px #9c9c9c;
    right: 50%;
    margin-right: -1.6em;
  }
  &:focus {
    box-sizing: initial;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
      inset 0px 0px 0px 3px #9c9c9c;
    right: 50%;  
  }
  &:active {
    box-shadow: none;
  }
`;

export const SwitchInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  &:focus {
    box-sizing: initial;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
      inset 0px 0px 0px 3px #9c9c9c;
  }
`