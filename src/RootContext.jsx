/* eslint-disable react/prop-types */
import { createContext } from 'react';

const RootContext = createContext();

export const RootProvider = ({ children }) => {
  
  return (
    <RootContext.Provider>
      <div className= 'root' >{children}</div>
    </RootContext.Provider>
  );
};

export default RootContext;
