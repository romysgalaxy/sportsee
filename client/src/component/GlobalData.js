import { useState, useEffect } from "react"
import { fetchUserData } from "../service/userService"

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
            <div>         
                <p>Calories : {userData.calorieCount}</p>
                <p>Proteines : {userData.carbohydrateCount}</p>
                <p>Glucides : {userData.lipidCount}</p>
                <p>Lipides : {userData.proteinCount}</p>
            </div>
        </div>
    )
}