import { useUserData } from "../utilities/useUserData"

export default function GlobalData(props) {
    const {userId} = props
    const userData = useUserData(userId)

    return (
        <div>
            {userData.keyData && (
                <div>         
                    <p>Calories : {userData.keyData.calorieCount}</p>
                    <p>Proteines : {userData.keyData.carbohydrateCount}</p>
                    <p>Glucides : {userData.keyData.lipidCount}</p>
                    <p>Lipides : {userData.keyData.proteinCount}</p>
                </div>
            )}
        </div>
    )
}