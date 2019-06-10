import React from 'react';
interface IManagementListStore {
  state: any,
  dispatch: () => void;
}
const ManagementListStore = React.createContext({});

export default ManagementListStore;
