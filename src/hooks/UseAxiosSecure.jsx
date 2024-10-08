import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://revmax-garage-server-1.onrender.com',
    withCredentials: true
});

const UseAxiosSecure = () => {

    const { logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('interceptors inside response', error.response);
            if (error.response.status === 401 || error.response.status === 403 || error.response.status === 404) {
                console.log('logout the user.....')
                logOut()
                    .then(() => {
                        navigate("/login");
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        });

    }, [])

    return axiosSecure;
};

export default UseAxiosSecure;