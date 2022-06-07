import { useEffect, useState } from "react";

export function useDarkMode() {
    const [theme, setTheme] = useState('light');

    function setMode(mode: any) {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    }
    
    function themeToggler() {
        theme === 'light' ? setMode('dark') : setMode('light');
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
    }, []);

    return [theme, themeToggler]
};