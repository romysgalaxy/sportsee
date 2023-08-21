import { useState, useEffect } from "react";
import { fetchUserPerformance } from '../service/userService';

export function useUserPerformance(userId) {
    const [userPerformance, setUserPerformance] = useState([]);
    const [userKind, setUserKind] = useState({});

    useEffect(() => {
        async function fetchData() {
            const result = await fetchUserPerformance(userId);
            if (result) {
                setUserPerformance(result.data.data);
                setUserKind(result.data.kind)
            }
        }
        fetchData();
    }, [userId]);

    return {userPerformance, userKind };
}