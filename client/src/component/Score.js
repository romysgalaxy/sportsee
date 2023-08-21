import { useUserData } from "../utilities/useUserData"

export default function Score(props) {
    const {userId} = props
    const userData = useUserData(userId)

    return (
        <div>
            <p>Score {userData.todayScore} %</p>
        </div>
    )
}