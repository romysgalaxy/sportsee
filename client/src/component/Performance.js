import { useUserPerformance } from "../utilities/useUserPerformance"

export default function Performance(props) {
    const {userId} = props
    const { userPerformance, userKind } = useUserPerformance(userId);

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