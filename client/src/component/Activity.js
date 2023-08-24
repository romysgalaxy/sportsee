import { fetchUserActivity } from "../service/userService"
import { useEffect, useState } from "react"
import SimpleBarChart from "./chart/SimpleBarChart"

export default function Activity(props) {

    const {userId} = props
    const [userData, setUserActivity] = useState({sessions: []})

    async function fetchData() {
        const userData = await fetchUserActivity(userId)
        setUserActivity(userData.data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>
            <p>Activity :</p>
            <ul>
                {userData.sessions.map((session, index) => (
                    <li key={index}>
                        Jour : {session.day}, Kilogram : {session.kilogram}, Calories : {session.calories}
                    </li>
                ))}
            </ul>
            <div>
                <SimpleBarChart sessions={userData.sessions}/> 
            </div>
        </div>
    )
}