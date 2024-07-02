

import { useEffect, useState } from 'react'
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
import ButtonUp from './components/Buttons/ButtonUp/ButtonUp'
import './App.scss'

function App() {
  const [activeOverlay, setActiveOverlay] = useState(true)
  const [stateButtonUp, setStateButtonUp] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      
      window.scrollTo(0, 0)
    }, 250)
  }, [])

  useEffect(() => {

    document.body.style.overflow = activeOverlay ? 'hidden' : 'auto';


  }, [activeOverlay])

  return (
    <>

      {/* {<Overlay activeOverlay={activeOverlay} setActiveOverlay={setActiveOverlay} />} */}

      <Intro activeOverlay={activeOverlay} />


      <Timer setStateButtonUp={setStateButtonUp} />
      <Navigation />
      <Invitation />
      <Story />
      <Timeline />
      <DressCode />
      <Hashtag />
      <Wishes />
      <Presence />
      <QA />
      <Footer />

      <ButtonUp stateButtonUp={stateButtonUp} />

    </>
  )
}

export default App
