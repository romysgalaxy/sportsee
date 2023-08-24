import { fetchUserData } from "../service/userService"
import { useEffect, useState } from "react"
import SimpleRadialBarChart from "./chart/SimpleRadialBarChart"
import '../style/score.css'

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
        <div className="score_container">
            <p className="score_title">Score</p>
            <SimpleRadialBarChart score={userData}/>
        </div>
    )
}