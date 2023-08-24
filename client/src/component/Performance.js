import { fetchUserPerformance } from "../service/userService"
import { useEffect, useState } from "react"
import SimpleRadarChart from "./chart/SimpleRadarChart"

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
            <p>Performance :</p>
            <ul>
                {userPerformance.map((data, index) => (
                    <li key={index}>
                        Value: {data.value}, Kind: {userKind[data.kind]}
                    </li>
                ))}
            </ul>
            <SimpleRadarChart performance={userPerformance} kind={userKind} />
        </div>
    )
}