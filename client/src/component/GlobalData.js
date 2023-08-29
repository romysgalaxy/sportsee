import { useState, useEffect } from "react"
import { fetchUserData } from "../service/userService"
import SimpleCard from "./chart/SimpleCard"
import '../style/globalData.css'

export default function GlobalData(props) {
    const {userId} = props
    const [userData, setUserData] = useState({})

    async function fetchData() {
        const userData = await fetchUserData(userId)
        setUserData(userData.data.keyData)
    }

    useEffect(() => {
        fetchData()
    }, []); 

    return (
        <div>
            <SimpleCard img='./flame.svg' color='rgba(255, 0, 0, 0.06)' data={`${userData.calorieCount}kCal`} text='Calories'/>
            <SimpleCard img='./meet.svg' color='rgba(74, 184, 255, 0.1)' data={`${userData.proteinCount}g`} text='Proteines'/>
            <SimpleCard img='./apple.svg' color='rgba(249, 206, 35, 0.1)' data={`${userData.carbohydrateCount}g`} text='Glucides'/>
            <SimpleCard img='./burger.svg' color='rgba(253, 81, 129, 0.1)' data={`${userData.lipidCount}g`} text='Lipides'/>
        </div>
    )
}