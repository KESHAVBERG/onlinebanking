import  {Login}  from './pages/Login'
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom'

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { useEffect, useState } from 'react';
import { History } from './pages/History';


function App() {

  const [currentUser, setUser] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      const userDetails = {
        uid: user.uid,
        email: user.email,
      }
      if(user){
        setUser(userDetails);
      }else{
        setUser(null);
      }
    })
  },[])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={currentUser?<Home user={currentUser}/>:<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/history' element={<History user={currentUser}/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
