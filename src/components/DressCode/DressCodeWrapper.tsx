import './dress-code.scss'
interface DressCodeWrapperProps {
  color: string[];
  imgName: string[];
  description: string;
}
function DressCodeWrapper({ color, description, imgName }: DressCodeWrapperProps) {
  return (
    <div className="dress_code--info">
      <div className="color--list">
        {color.map((item: string, index: number) =>
          <div
            key={index}
            className="color"
            style={item === '#ffffff' ? { background: item, border: '1px solid #000' } : { background: item }}></div>)}
      </div>
      <div className="dress_code--info-desc">
        {description}
      </div>

      <div className="dress_code--info-img">
        {imgName.map((item: string, index: number) =>
          <img key={index} src={`./img/photos-dress_code/${item}.png`} alt="img" />)}
      </div>
    </div>
  )
}

export default DressCodeWrapper