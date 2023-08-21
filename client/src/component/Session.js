import { useUserAverageSessions } from "../utilities/useUserAverageSessions"

export default function Session(props) {
    const {userId} = props
    const userData = useUserAverageSessions(userId)

    return (
        <div>
            <p>Sessions:</p>
                {userData.sessions && userData.sessions.map((session, index) => (
                    <li key={index}>
                        Jour : {session.day}, Temps : {session.sessionLength}
                    </li>
                ))}
        </div>
    )
}