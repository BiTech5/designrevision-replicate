import { createContext } from "react";
interface ThemeContextType  {
    selectedColor: string,
    setSelectedColor: (color: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export default ThemeContext;