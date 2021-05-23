import { createContext, useReducer } from 'react';
import { indexReducer, initState } from '../reducers/IndexReducer';

export const IndexContext = createContext();

export default function IndexProvider({ children }) {
  return (
    <IndexContext.Provider value={useReducer(indexReducer, initState)}>
      {children}
    </IndexContext.Provider>
  )
}