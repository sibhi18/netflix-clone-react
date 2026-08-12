import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MovieDetails from "./pages/MovieDetails";
import MYList from "./pages/Mylist";
import Search from "./pages/Search";
import NewPopular from "./pages/NewPopular";
import TvShow from "./pages/Tvshow";
import Movies from "./pages/Movies";
import Profile from "./pages/Profile";


function App(){
  const [user, setUser] = useState(() => localStorage.getItem("user"));
  return(
   <Routes>
    <Route path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
    <Route path="/login" element={user ? <Navigate to="/"/> : <Login onLogin={() => setUser(localStorage.getItem("user"))}/>}></Route>
    <Route path="/movie/:id" element={user ? <MovieDetails/> : <Navigate to="/login"/>}></Route>
    <Route path="/mylist" element={user ? <MYList/> : <Navigate to="/login"/>}></Route>
    <Route path="/search" element={user ? <Search/> : <Navigate to="/login"/>}></Route>
    <Route path="/newpopular" element={user ? <NewPopular/> : <Navigate to="/login"/>}></Route>
    <Route path="/tv-show" element={user ? <TvShow/> : <Navigate to="/login"/>}></Route>
    <Route path="/movies" element={user ? <Movies/> : <Navigate to="/login"/>}></Route>
    <Route path="/profile" element={user ? <Profile onLogout={() => setUser(null)} /> : <Navigate to="/login"/>}></Route>
    
      
  


   </Routes>
  )
}

export default App;