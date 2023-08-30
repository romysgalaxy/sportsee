export default function Button(props) {
    const {img} = props
    return (
        <div className="sideBar_button">
            <img src={img} alt="sidebar button"/>
        </div>
    )
}