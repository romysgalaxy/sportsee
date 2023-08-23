import { fetchUserData } from "../service/userService"
import { useEffect, useState } from "react"

export default function Hello(props) {
    const {userId} = props
    const [userData, setUserData] = useState({})

    async function fetchData() {
        const userData = await fetchUserData(userId)
        setUserData(userData.data.userInfos)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>
            <p>Hello {userData.firstName}</p>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}