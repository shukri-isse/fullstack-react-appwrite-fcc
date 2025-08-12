import { createContext, useContext } from "react";

// create a context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

// make everyone aware the context exists
export const ThemeProvider = ThemeContext.Provider;

// every component can directly use storre/context api
export default function useTheme() {
    return useContext(ThemeContext)
}