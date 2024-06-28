
import './App.scss'
import DressCode from './components/DressCode/DressCode'
import Hashtag from './components/Hashtag/Hashtag'
import Intro from './components/Intro/Intro'
import Invitation from './components/Invitation/Invitation'
import Navigation from './components/Navigation/Navigation'
import Story from './components/Story/Story'
import Timeline from './components/Timeline/Timeline'
import Timer from './components/Timer/Timer'
import Wishes from './components/Wishes/Wishes'

function App() {


  return (
    <>
        <Intro/>
        <Timer/>
        <Navigation/>
        <Invitation/>
        <Story/>
        <Timeline/>
        <DressCode/>
        <Hashtag/>
        <Wishes/>
    </>
  )
}

export default App
