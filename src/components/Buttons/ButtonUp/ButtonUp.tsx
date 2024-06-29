
import './button-up.scss'


type ButtonUpProps = {
  stateButtonUp: boolean
}


export default function ButtonUp({ stateButtonUp }: ButtonUpProps) {





  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div id='button-up' className={ `button-up ${stateButtonUp ? 'active' : ''}`}>

      <button onClick={scrollToTop}></button>
    </div>
  )
}
