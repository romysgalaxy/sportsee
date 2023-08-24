import { fetchUserAverageSessions } from "../service/userService"
import { useEffect, useState } from "react"
import SimpleLineChart from "./chart/SimpleLineChart"

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
        <div>
            <p>Sessions:</p>
                {userData.sessions.map((session, index) => (
                    <li key={index}>
                        Jour : {session.day}, Temps : {session.sessionLength}
                    </li>
                ))}
            <SimpleLineChart sessions={userData.sessions}/>
        </div>
    )
}