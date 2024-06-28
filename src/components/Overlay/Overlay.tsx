
import "./overlay.scss"

type OverlayProps = {
  activeOverlay: boolean;
  setActiveOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Overlay({ activeOverlay, setActiveOverlay }: OverlayProps) {

  return (
    <div className={`overlay ${activeOverlay ? 'active' : ''}`}>
      <div className="overlay--border">
        <div className="overlay--wrapper">
          <h3>
            Вам приглашение
          </h3>
          <div className="logo">

            <img src="./svg/logo.svg" alt="logo" />


          </div>

          <div className="accept-btn">
            <button onClick={() => setActiveOverlay(false)}>
              Принять
              <img src="./svg/message.svg" alt="svg" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
