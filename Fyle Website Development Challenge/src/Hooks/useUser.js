import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useUser = (username) => {
    const API = `https://api.github.com/users/${username}`;

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const getUser = async () => {
            try {
                const { data } = await axios.get(API);
                setUser(data);
                setLoading(false);
            } catch (error) {
                if (error.response.status === 403) {
                    console.log("User Not found");
                }
            }
        };
        getUser();
    }, [API, navigate]);

    return [user, setUser, loading];
};

export default useUser;
