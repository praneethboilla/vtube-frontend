import { Link } from "react-router-dom"

function Modal() {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div
                    className="inline-block align-bottom  bg-[#0F0F0F] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div className="sm:flex sm:items-start flex-col">
                        <div
                            className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10 self-center">
                            <svg className="h-6 w-6 text-green-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h1 className="self-center text-white text-xl">Login or Signup to continue</h1>
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <span className="flex-1 mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto h-10 bg-purple-700 justify-center items-center hover:bg-purple-900">
                            <Link to={'/login'}>
                                <span className="font-medium text-white text-lg">Login</span>
                            </Link>
                        </span>
                        <span className="flex-1 mt-3 mr-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto h-10 bg-purple-700 justify-center items-center hover:bg-purple-900">
                            <Link to={'/signUp'}>
                                <span className="font-medium text-white text-lg">SignUp</span>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal