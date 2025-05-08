import { useState,ReactNode } from "react";
import ThemeContext from "../../Context/ThemeContext";
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [selectedColor, setSelectedColor] = useState("blue-600");

    return (
        <ThemeContext.Provider value={{ selectedColor, setSelectedColor }}>
            {children}
        </ThemeContext.Provider>
    );
};