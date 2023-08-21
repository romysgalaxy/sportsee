import { useUserActivity } from "../utilities/useUserActivity"

export default function Activity(props) {
    const {userId} = props
    const userData = useUserActivity(userId)

    return (
        <div>
            <p>Performance :</p>
            <ul>
                {userData.sessions && userData.sessions.map((session, index) => (
                    <li key={index}>
                        Jour : {session.day}, Kilogram : {session.kilogram}, Calories : {session.calories}
                    </li>
                ))}
            </ul>
        </div>
    )
}