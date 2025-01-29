import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/slices/authSlice";

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userNameRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const username = userNameRef.current.value;
        const password = passwordRef.current.value;

        const fields = [
            { value: username, ref: userNameRef, name: 'Username' },
            { value: password, ref: passwordRef, name: 'Password' },
        ];

        // Check if any field is empty
        for (const field of fields) {
            if (!field.value) {
                setError(`${field.name} is required.`);
                setTimeout(() => setError(""), 3000);
                field.ref.current.focus();
                return;
            }
        }

        setError("");
        dispatch(loginStart())
        await axios.post('/api/v1/users/login', { username, password },{ withCredentials: true })
            .then((response) => {
                console.log(response.data.message)
                dispatch(loginSuccess(response.data.data.user))
                navigate('/');
            })
            .catch((error) => {
                console.error('Error:', error)
                dispatch(loginFailure())
            })
    };


    return (
        <div className="flex bg-[#0F0F0F] justify-center items-center h-screen">
            <form onSubmit={handleLogin} className="flex flex-col bg-purple-800 w-[350px] sm:w-[400px] p-6 rounded-4xl">
                <h1 className="self-center text-3xl text-white font-sans mb-5">Login</h1>
                <div className="flex flex-col mb-4">
                    <label className="text-white">Username</label>
                    <input
                        className="h-10 bg-white rounded px-2"
                        ref={userNameRef}
                        placeholder="username"
                        autoComplete="username"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-white">Password</label>
                    <input
                        className="h-10 bg-white rounded px-2"
                        ref={passwordRef}
                        placeholder="password"
                        autoComplete="current-password"
                        type="password"
                    />
                </div>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <button type="submit" className="bg-white self-center cursor-pointer w-full h-10 rounded text-purple-900 font-bold mt-4 text-lg">
                    Login
                </button>
                <Link to={"/signUp"} className="cursor-pointer self-center text-blue-600 underline pt-2 text-lg">
                    SignUp
                </Link>
            </form>
        </div>
    );
}

export default Login;
