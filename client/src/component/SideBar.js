import Button from "./Button"
import '../style/sideBar.css'

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="sideBar_container">
                <Button img="./yoga.svg"/>
                <Button img="./swim.svg"/>
                <Button img="./bike.svg"/>
                <Button img="./gym.svg"/>
            </div>
        </div>
    )
}