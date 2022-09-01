import { createContext } from "react";

const ContextUser = createContext();
const UserProvider = ContextUser.Provider; //Component
const UserConsumer = ContextUser.Consumer; //Component

export default ContextUser; //default component export
export { UserProvider, UserConsumer }; //named component export
