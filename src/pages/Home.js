import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../firebase';

export const Home = () => {
  return (
    <div onClick={()=>signOut(auth).then(()=>{
        window.location.reload();
    })}>Home</div>
  )
}
