
import { Route, Routes } from 'react-router-dom'
import Login from './component/Authentication/Login'
import RequireAuth from './component/Authentication/RequireAuth'
import Signup from './component/Authentication/Signup'
import EnrollCourse from './component/EnrollCourse'
import Header from './component/Home/Header'
import Home from './component/Home/Home'


function App() {

  return (
    <div>
      <Header></Header>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<RequireAuth><EnrollCourse /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
