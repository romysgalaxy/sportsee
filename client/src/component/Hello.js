import { fetchUserData } from "../service/userService"
import { useEffect, useState } from "react"
import '../style/hello.css'

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
        <div className="hello_container">
            <p className="hello_title">Hello <span>{userData.firstName}</span></p>
            <p className="hello_content">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}