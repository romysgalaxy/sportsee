import { fetchUserData } from "../service/userService"
import { useEffect, useState } from "react"
import SimpleRadialBarChart from "./chart/SimpleRadialBarChart"

export default function Score(props) {
    const {userId} = props
    const [userData, setUserData] = useState({})

    async function fetchData() {
        const userData = await fetchUserData(userId)
        setUserData(userData.data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>
            <p>Score {userData.todayScore} %</p>
            <SimpleRadialBarChart score={userData}/>
        </div>
    )
}