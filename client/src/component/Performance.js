import { fetchUserPerformance } from "../service/userService"
import { useEffect, useState } from "react"
import SimpleRadarChart from "./chart/SimpleRadarChart"
import '../style/performance.css'

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
        <div className="performance_container">
            <SimpleRadarChart performance={userPerformance} kind={userKind} />
        </div>
    )
}