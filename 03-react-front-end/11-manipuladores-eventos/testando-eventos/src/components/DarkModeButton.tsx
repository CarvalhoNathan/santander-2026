export function DarkModeButton() {
    const handleClick = () => {
        alert("Dark mode ativado!")
    }

    return (
        <button
            className="button"
            onClick={handleClick}
        >
            🌙
        </button>
    )
}