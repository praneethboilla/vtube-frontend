import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MyVideos from './pages/MyVideos';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Player from './pages/player';
import Liked from './pages/Liked';
import Subscriptions from './pages/Subscriptions';
import History from './pages/History';
import PlayList from './pages/PlayList';

function App() {
    return (
        <Router>
            <AppContext />
        </Router>
    );
}

function AppContext() {
    const excludedPaths = ['/login', '/signUp'];
    const location = useLocation();
    return (
        <>
            {!excludedPaths.includes(location.pathname) && <SideBar />}
            {!excludedPaths.includes(location.pathname) && <NavBar />}
            <Routes>
                {/* Public routes */}
                <Route path='/login' element={<Login />} />
                <Route path='/signUp' element={<SignUp />} />

                {/* Protected Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/my-videos" element={<MyVideos />} />
                <Route path='/watch/:videoId' element={<Player />} />
                <Route path='/liked' element={<Liked />} />
                <Route path='/subscription' element={<Subscriptions />} />
                <Route path='/history' element={<History />} />
                <Route path='/playlist' element={<PlayList />} />
            </Routes>
        </>
    )
}

export default App;


