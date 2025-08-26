import { useState, useEffect } from "react";

export const themes = [
    { value: "", label: "Dark" },
    { value: "light", label: "Light" },
    { value: "light-blue", label: "Light Blue" },
    { value: "dark-blue", label: "Dark Blue" },
];

export default function useTheme(initialTheme = "") {
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    return { theme, setTheme, handleThemeChange };
}