import "./presence.scss"

export default function Presence() {
  return (
    <section className="presence">
      <h2>Подтведить присутствие</h2>


      <div className="presence--btn">
        <button className="presence--btn--yes">Приду!</button>
        <button className="presence--btn--no">Не приду</button>
      </div>
      
    </section>
  )
}
