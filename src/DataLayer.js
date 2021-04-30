import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    {/* wrap children */}
  </DataLayerContext.Provider>
);
//pass in the props (, ,children) is <App/> thats wrapped inside <DataLayer/> in index.js

export const useDataLayerValue = () => useContext(DataLayerContext);
//useContext
