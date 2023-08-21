import { useState, useEffect } from "react";
import { fetchUserData } from '../service/userService';

export function useUserData(userId) {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await fetchUserData(userId);
            if (result) {
                setUserData(result.data);
            }
        }
        fetchData();
    }, [userId]);

    return userData;
}