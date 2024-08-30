import { useState } from 'react'
import LandingPage from './LandingPage'
import Quiz from './Quiz';

function App() {
  const [isMain, setMenu] = useState(true);
  const toggle = () => { setMenu(!isMain); };

  return isMain ? <LandingPage startQuiz={toggle} /> : <Quiz quizFile={"Quiz1"} exitQuiz={toggle} />
}

export default App
