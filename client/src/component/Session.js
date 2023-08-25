import { fetchUserAverageSessions } from "../service/userService"
import { useEffect, useState } from "react"
import SimpleLineChart from "./chart/SimpleLineChart"
import '../style/session.css'

export default function Session(props) {
    const {userId} = props
    const [userData, setUserAverageSessions] = useState({sessions:[]})

    async function fetchData() {
        const userData = await fetchUserAverageSessions(userId)
        setUserAverageSessions(userData.data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="session_container">
            <p className="session_title">Durée moyenne des <br/>sessions</p>
                {/* {userData.sessions.map((session, index) => (
                    <li key={index}>
                        Jour : {session.day}, Temps : {session.sessionLength}
                    </li>
                ))} */}
            <div className="session_chart">
                <SimpleLineChart sessions={userData.sessions}/>
            </div>
        </div>
    )
}