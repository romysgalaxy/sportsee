import { useUserData } from "../utilities/useUserData"

export default function Hello(props) {
    const {userId} = props
    const userData = useUserData(userId)

    return (
        <div>
            {userData.userInfos && (
                <p>Hello {userData.userInfos.firstName}</p>
            )}
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}