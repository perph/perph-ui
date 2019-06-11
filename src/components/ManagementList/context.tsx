import React from 'react';
interface IManagementListStore {
  state: any,
  dispatch: (action: any) => void;
}
const ManagementListStore = React.createContext<IManagementListStore>({
  state: {},
  dispatch: ({}) => {}
});

export default ManagementListStore;
