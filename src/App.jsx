import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import AuthorizedRoutes from './components/AuthorizedRoutes'
import Header from './components/header/Header'
import Calendar from './pages/calendar/Calendar'
import Contact from './pages/contact/Contact'
import Homepage from './pages/homepage/Homepage'
import Login from './pages/login/Login'
import MyPortal from './pages/myportal/MyPortal'

function App() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>

                    <Route path="/" element={<Homepage />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* <Route element={<AuthorizedRoutes />}> */}
                        <Route path="/my_portal" element={<MyPortal />} />
                    {/* </Route> */}

                    <Route path="*" element={<Navigate to="/" />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;