import { useEffect, useState } from 'react'

import "./confirm.scss"
import fetchData from '../../api/fetchData';


const options = [
  {
    id: "1",
    label: "Буду присутствовать весь свадебный день",
    active: false
  },
  {
    id: "2",
    label: "Смогу быть только на регистрации",
    active: false
  },
  {
    id: "3",
    label: "Смогу быть только на банкете",
    active: false
  },
]

type PresenceState = {
  stateForm: boolean;
  button: boolean;
  present: boolean;
  presentYes: boolean;
  answerUser: boolean
};

type PresenceProps = {
  presentState: PresenceState;
  setPresentState: React.Dispatch<React.SetStateAction<PresenceState>>;
};

export default function Confirm({ presentState, setPresentState }: PresenceProps) {
  const [optionsLabel, setOptionsLabel] = useState(options)
  const [textArea, setTextArea] = useState({
    y: '',
    n: ''
  });


  useEffect(() => {
    optionsLabel.filter((el) => el.active === true)[0]
  }, [optionsLabel])


  return (
    <div className={`confirm ${presentState.stateForm ? "active" : ""}`}>


      {presentState.present ? (
        <form action="" onSubmit={(e) => {
          e.preventDefault()
          setPresentState((prev) => (
            {
              ...prev,
              presentYes: true,
              answerUser: true,
              stateForm: false,
              button: false
            }));
          fetchData({ options: optionsLabel.filter((el) => el.active === true)[0], textArea: textArea.y })
        }}>






          {optionsLabel.map(option => (
            <label key={option.id} id={option.id}>
              <input
                type="radio"
                onChange={() => setOptionsLabel((prev) => prev.map((el) => ({ ...el, active: option.id === el.id })))}
                value={option.id}
                checked={option.active}
                name="radio"
                required />
              <div className={`checkbox ${option.active ? "active" : ""}`}></div>
              <p className={option.active ? "active" : ""}>{option.label}</p>
            </label>
          ))}

          <div className="textarea-wrapper">
            <textarea required value={textArea.y} onChange={(e) => setTextArea((prev) => ({ ...prev, y: e.target.value }))} placeholder='Всё, что вы так хотели сказать, но стеснялись '></textarea>

          </div>

          <div className="confirm--btn">

            <button className='btn'>Подтвердить</button>
            <button typeof='button' className='btn--back' onClick={(e) => {
              e.preventDefault()
              setPresentState((prev) => ({ ...prev, stateForm: false, button: true }));
            }}>Назад</button>
          </div>
        </form>
      ) : (
        <form action="" onSubmit={(e) => {
          e.preventDefault()
          setPresentState((prev) => (
            {
              ...prev,
              presentYes: true,
              answerUser: false,
              stateForm: false,
              button: false
            }));
            fetchData({ options: { id: '', label: 'Не придет', active: false }, textArea: textArea.n })
        }}>
          <div className="textarea-wrapper">
            <textarea required name="" value={textArea.n} onChange={(e) => setTextArea((prev) => ({ ...prev, n: e.target.value }))} id="" placeholder='По какой причине не сможете присутствовать?'></textarea>

          </div>

          <div className="confirm--btn">

            <button className='btn' >Подтвердить</button>
            <button typeof='button' className='btn--back' onClick={(e) => {
              e.preventDefault()
              setPresentState((prev) => ({ ...prev, stateForm: false, button: true }));
            }}>Назад</button>
          </div>
        </form>
      )
      }

    </div>
  )
}
