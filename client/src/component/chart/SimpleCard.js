export default function SimpleCard (props) {
    const {img, color, data, text} = props
    return (
        <div className="simpleCard_container">
            <div className="simpleCard_img" style={{backgroundColor: color}}>
                <img src={img} alt="icon"/>
            </div>
            <div className="simpleCard_content">
                <p>{data}</p>
                <span>{text}</span>
            </div>
        </div>
    )
}