import { useState } from "react"
import "./presence.scss"
import Confirm from "./Confirm"
import BranchSVG from "../SVG/branchSVG"
import { COLOR } from "../../var/var"

export default function Presence() {
  const [presentState, setPresentState] = useState({
    stateForm: false,
    button: true,
    present: true,
    answerUser: false,
    presentYes: false
  })

  //   setTimeout(() => {
  //     const presenceBtn = document.querySelector('.presence--btn') as HTMLElement;
  //     if (presenceBtn) {
  //         presenceBtn.style.display = !presentState ? 'flex' : 'none';
  //     }
  // }, 1000);




  return (
    <section id="presence" className="presence">

      <BranchSVG color ={COLOR.branchViolet} />
      <BranchSVG color ={COLOR.branchViolet} />
      <div className={`presence--wrapper ${presentState.stateForm ? "active" : ""}`}>
        {/* <h2>Подтведить присутствие</h2> */}
        <h2>{
          !presentState.presentYes ?
            "Подтвердите присутствие" :
            `${presentState.answerUser ? "До встречи!" : "Очень жаль!"}`
        }</h2>





        <div className={`presence--btn ${presentState.button ? "active" : ""}`} >
          <button disabled={!presentState.button} className="presence--btn--yes" onClick={() => {
            setPresentState((prev) => ({ ...prev, button: false, stateForm: true, present: true }));
          }}>Приду!</button>
          <button disabled={!presentState.button} className="presence--btn--no" onClick={() => {
            setPresentState((prev) => ({ ...prev, button: false, stateForm: true, present: false }));
          }}>Не приду</button>
        </div>






        <Confirm presentState={presentState} setPresentState={setPresentState} />
      </div>







    </section>
  )
}
