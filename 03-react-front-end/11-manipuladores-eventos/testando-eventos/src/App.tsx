import './App.css'
import { SwitchThemeButton } from './components/SwitchThemeButton'

function App() {
  return (
    <>
      <h3>Selecione seu tema preferido</h3>
      <SwitchThemeButton theme='light'>☀️</SwitchThemeButton>
      <SwitchThemeButton theme='dark'>🌙</SwitchThemeButton>
    </>
  )
}

export default App
