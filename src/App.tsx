
import './App.scss'
import Intro from './components/Intro/Intro'
import Invitation from './components/Invitation/Invitation'
import Navigation from './components/Navigation/Navigation'
import Story from './components/Story/Story'
import Timer from './components/Timer/Timer'

function App() {


  return (
    <>
        <Intro/>
        <Timer/>
        <Navigation/>
        <Invitation/>
        <Story/>
    </>
  )
}

export default App
