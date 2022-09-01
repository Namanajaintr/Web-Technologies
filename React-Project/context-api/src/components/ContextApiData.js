import { createContext } from "react";

const ContextData = createContext();
const DataProvider = ContextData.Provider; //Component
const DataConsumer = ContextData.Consumer; //Component

export default ContextData; //default component export
export { DataProvider, DataConsumer }; //named component export
