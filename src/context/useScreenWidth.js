import { createContext, useContext } from "react";

// Create context for screen  width
export const ScreenWidthContext = createContext();

// custom hook to access screen width context
export const useScreenWidth = () => {
    return useContext(ScreenWidthContext);
}