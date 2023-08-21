import { useState, useEffect } from "react";
import { fetchUserAverageSessions } from '../service/userService';

export function useUserAverageSessions(userId) {
    const [userData, setUserAverageSessions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await fetchUserAverageSessions(userId);
            if (result) {
                setUserAverageSessions(result.data);
            }
        }
        fetchData();
    }, [userId]);

    return userData;
}