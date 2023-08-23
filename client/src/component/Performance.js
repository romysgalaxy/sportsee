import { fetchUserPerformance } from "../service/userService"
import { useEffect, useState } from "react"

export default function Performance(props) {

    const {userId} = props
    const [userPerformance, setUserPerformance] = useState([])
    const [userKind, setUserKind] = useState({kind: {}})

    async function fetchData() {
        const userData = await fetchUserPerformance(userId)
        setUserPerformance(userData.data.data)
        setUserKind(userData.data.kind)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>
            <p>Activité :</p>
            <ul>
                {userPerformance.map((data, index) => (
                    <li key={index}>
                        Value: {data.value}, Kind: {userKind[data.kind]}
                    </li>
                ))}
            </ul>
        </div>
    )
}