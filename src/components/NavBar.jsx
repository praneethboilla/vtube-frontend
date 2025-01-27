import { useNavigate } from "react-router-dom"

function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="flex bg-[#0F0F0F]  p-4 items-center border-b border-white fixed w-full z-100">
            <div className="flex-1 flex  items-center">
                <h1 className="text-2xl font-bold text-white">Logo</h1>
            </div>

            <div className="flex-1">
                <input
                    className="border border-gray-300 rounded 
                    py-2 px-4 w-full 
                    focus:outline-none focus:ring-2 text-white focus:ring-purple-500"
                    placeholder="Search..."
                />
            </div>

            <div className="flex-1 flex justify-center items-center space-x-4">
                <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800" onClick={() => navigate("/login")}>Login</button>
                <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800" onClick={() => navigate("/signUp")}>Sign Up</button>
            </div>
        </div>

    )
}

export default NavBar