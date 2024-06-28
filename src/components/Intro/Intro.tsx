import "./intro.scss"

export default function Intro() {
  return (
    <section className="intro">
        <div className="intro--title">
            <h2>Артём и Владислава</h2>
            <div className="date">30.08.2024</div>
            <button className="volume-logo">
                <img src="./svg/Volume.svg" alt="icon" />
            </button>
        </div>
    </section>
  )
}
