import { useState, useEffect } from "react";
import { fetchUserActivity } from '../service/userService';

export function useUserActivity(userId) {
    const [userData, setUserActivity] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await fetchUserActivity(userId);
            if (result) {
                setUserActivity(result.data);
            }
        }
        fetchData();
    }, [userId]);

    return userData;
}