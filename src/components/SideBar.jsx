import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faClock, faListAlt, faSquareCaretRight } from "@fortawesome/free-regular-svg-icons";

export default function SideBar() {
    return (
        <div className='w-55 bg-[#0F0F0F] h-screen fixed top-18 left-0 z-10'>
            <Link
                to="/"
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-purple-800 hover:text-gray-300"
            >
                <svg className="w-6 h-6 stroke-current text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="ml-2 text-sm font-medium text-white">Home</span>
            </Link>
            <Link
                to="/my-videos"
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-purple-800 hover:text-gray-300"
            >
                <svg className="w-6 h-6 stroke-current text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
                </svg>
                <span className="ml-2 text-sm font-medium text-white">My Videos</span>
            </Link>
            <Link
                to="/liked"
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-purple-800 hover:text-gray-300"
            >
                <FontAwesomeIcon icon={faHeart} size="lg" style={{color: "#ffffff"}}/>
                <span className="ml-2 text-sm font-medium text-white">Liked</span>
            </Link>
            <Link
                to="/subscription"
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-purple-800 hover:text-gray-300"
            >
                 <FontAwesomeIcon icon={faSquareCaretRight} size="lg" style={{color: "#ffffff"}}/>
                <span className="ml-2 text-sm font-medium text-white">Subscription</span>
            </Link>
            <Link
                to="/history"
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-purple-800 hover:text-gray-300"
            >
                <FontAwesomeIcon icon={faClock} size="lg" style={{color: "#ffffff"}}/>
                <span className="ml-2 text-sm font-medium text-white">History</span>
            </Link>
            <Link
                to="/playlist"
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-purple-800 hover:text-gray-300"
            >
                <FontAwesomeIcon icon={faListAlt} size="lg" style={{color: "#ffffff"}}/>
                <span className="ml-2 text-sm font-medium text-white">Playlist</span>
            </Link>
        </div>
    );
}
