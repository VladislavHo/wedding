import { useState } from "react"
import "./presence.scss"
import Confirm from "./Confirm"

export default function Presence() {
  const [presentState, setPresentState] = useState({
    stateForm: false,
    button: true,
    present: true

  })

  //   setTimeout(() => {
  //     const presenceBtn = document.querySelector('.presence--btn') as HTMLElement;
  //     if (presenceBtn) {
  //         presenceBtn.style.display = !presentState ? 'flex' : 'none';
  //     }
  // }, 1000);




  return (
    <section id="presence" className="presence">
      <h2>Подтведить присутствие</h2>


      {presentState.button && (
        <div className={`presence--btn ${presentState ? "active" : ""}`} >
          <button className="presence--btn--yes" onClick={() => {
            setPresentState((prev) => ({ ...prev, button: false, stateForm: true, present: true }));
          }}>Приду!</button>
          <button className="presence--btn--no" onClick={() => {
            setPresentState((prev) => ({ ...prev, button: false, stateForm: true, present: false }));
          }}>Не приду</button>
        </div>
      )}





      <Confirm presentState={presentState} setPresentState={setPresentState} />





    </section>
  )
}
