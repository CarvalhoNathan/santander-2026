import './App.css'
import Profile from './components/Profile'
import Skills from './components/Skills'
import { SquareNumber } from './components/SquareNumber';
import { DoubleNumber } from './components/DoubleNumber';

function App() {
  const user = {
    name: "Nathan Carvalho",
    role: "Desenvolvedor Web Full Stack",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  }

  const hardSkillsList = ["Html", "Css", "JavaScript", "React", "Node.js", "TypeScript"];
  const softSkillsList = ["Trabalho em equipe", "Comunicação efetiva", "Resolução de problemas", "Pensamento crítico", "Adaptabilidade"];

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      {/* 1. Usando Spread Operator para passar as props do 'user' */}
      {/* 2. Demonstrando Children Props ao passar <Skills /> dentro do <Profile> */}
      <Profile {...user}>
        {/* 3. Passando as listas para demonstrar o Prop Drilling até os componentes filhos de Skills */}
        <Skills hardSkills={hardSkillsList} softSkills={softSkillsList} />
      </Profile>
      <SquareNumber number={5} />
      <DoubleNumber number={5} />
    </div>
  )
}

export default App

