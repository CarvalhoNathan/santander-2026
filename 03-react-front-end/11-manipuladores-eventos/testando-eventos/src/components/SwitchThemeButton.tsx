import type { PropsWithChildren } from "react";

interface Props {
    theme: 'dark' | 'light';
}

export function SwitchThemeButton({ theme, children }: PropsWithChildren<Props>) {
    const handleClick = () => {
        const shouldChangeTheme = confirm(`Deseja mudar para o tema ${theme}?`);
        if (!shouldChangeTheme) {
            return;
        }

        document.body.classList.add(`${theme}-theme`);
        const themeToRemove = theme === 'light' ? 'dark' : 'light';
        document.body.classList.remove(`${themeToRemove}-theme`);
    }

    return (
        <button className="button" onClick={handleClick}>{children}</button>
    )
}