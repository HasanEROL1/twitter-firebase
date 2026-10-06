import { BrowserRouter, Routes,Route } from "react-router-dom"
import Login from "./pages/login"
import Feed from "./pages/feed"
import Profile from "./pages/profile"
import Settings from "./pages/settings"
import More from "./pages/more"
import Protected from "./components/protected"

const App = () => {

return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />}/>
        {/* Protected Routes */}
      <Route element= {<Protected />} >
         <Route path="/feed" element={<Feed />} />
         <Route path="/notifications" element={<Feed />} />
         <Route path="/messages" element={<Feed />} />
         <Route path="/lists" element={<Feed />} />
         <Route path="/bookmarks" element={<Feed />} />
         <Route path="/verified" element={<Feed />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/settings" element={<Settings />} />
         <Route path="/more" element={<More />} />
        

    </Route >
       </Routes>
  </BrowserRouter>
  
  )
}

export default App