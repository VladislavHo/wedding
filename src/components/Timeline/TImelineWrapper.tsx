import './timeline.scss'

export default function TImelineWrapper({...props}) {

  const {title, description, map, svg_name, line} = props
  
  return (
    <>
      <div className=" timeline--info">

        <div className="timeline--info-line">

          <img src={`./svg/${svg_name}.svg`} alt="icon" />
         {line && <div className="line"></div>} 

        </div>

        <div className="timeline--info-time">
          <h4>{title}</h4>
          {description.map((item:string, index:number) => <p key={index}>{item}</p>)}
          {map && <div className="timeline--info-time-map"></div>}
        </div>
      </div>

    </>
  )
}
