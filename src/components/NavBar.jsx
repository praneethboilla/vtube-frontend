import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faHippo } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { status, userData } = useSelector((state) => state.auth);

    const handleLogOut = async () => {
        await axios.post('/api/v1/users/logout', { withCredentials: true })
            .then((response) => {
                console.log(response.data.message);
                dispatch(logout());
            }
            ).catch((err) => {
                console.error("Error during logout", err);
            })
    };

    return (
        <div className="flex bg-[#0F0F0F] p-4 items-center border-b border-white fixed w-full z-100">
            <div className="flex-1 flex items-center">
                <FontAwesomeIcon size="2xl" className="text-purple-700" icon={faHippo}/>
                <h1 className="text-white text-2xl font-bold pl-2">V-tube</h1>
            </div>

            <div className="flex-1">
                <input
                    className="border border-gray-300 rounded 
                    py-2 px-4 w-full 
                    focus:outline-none focus:ring-2 text-white focus:ring-purple-500"
                    placeholder="Search..."
                />
            </div>

            <div className="flex-1 flex justify-center items-center">
                {
                    status ? (
                        <div className="space-x-2">
                            <FontAwesomeIcon icon={faCircleUser} size="xl" style={{ color: "#ffffff" }} />
                            <span className=" text-white text-lg">{userData.username}</span>
                            <button
                                className="bg-purple-700 text-white py-2 px-4 ml-10 rounded hover:bg-purple-900"
                                onClick={() => handleLogOut()}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <button
                                className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-900"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </button>
                            <button
                                className="bg-purple-700 text-white py-2 px-4 ml-10 rounded hover:bg-purple-900"
                                onClick={() => navigate("/signUp")}
                            >
                                Sign Up
                            </button>
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default NavBar;