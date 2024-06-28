
import { useState } from 'react'
import './App.scss'
import DressCode from './components/DressCode/DressCode'
import Footer from './components/Footer/Footer'
import Hashtag from './components/Hashtag/Hashtag'
import Intro from './components/Intro/Intro'
import Invitation from './components/Invitation/Invitation'
import Navigation from './components/Navigation/Navigation'
import Overlay from './components/Overlay/Overlay'
import Presence from './components/Presence/Presence'
import QA from './components/QA/QA'
import Story from './components/Story/Story'
import Timeline from './components/Timeline/Timeline'
import Timer from './components/Timer/Timer'
import Wishes from './components/Wishes/Wishes'

function App() {
  const [activeOverlay, setActiveOverlay] = useState(true)

  return (
    <>  
        <Overlay activeOverlay={activeOverlay} setActiveOverlay={setActiveOverlay}/>
        <Intro activeOverlay={activeOverlay}/>
        <Timer/>
        <Navigation/>
        <Invitation/>
        <Story/>
        <Timeline/>
        <DressCode/>
        <Hashtag/>
        <Wishes/>
        <Presence/>
        <QA/>
        <Footer/>
    </>
  )
}

export default App
