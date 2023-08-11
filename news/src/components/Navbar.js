import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleAuthProvider } from '../firebase/setup';

export default function Navbar() {


    const [authData,setAuthData] = React.useState([])
    const [user,setUser] = React.useState(false)


    const signInGoogle = async()=>{
        try{
           const data = await signInWithPopup(auth,googleAuthProvider)
        setAuthData(data)
        setUser(true)
           console.log(data)
        }catch(err){
            console.log(err)
        }
    }


    const logout = async()=>{
        try{
            await signOut(auth)
            setUser(false)
            setAuthData("")
        }catch(err){
            console.error(err)
        }
    }

console.log(authData)
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"#F0F0F0"}} elevation={0}>
        <Toolbar >
          <Typography variant="h6" sx={{color:"black"}} component="div">
            YS2 News
          </Typography>
          {user ? <Button onClick={logout} variant='contained' sx={{ml:"760px",color:"black",bgcolor:"white"}} size="small">Logout</Button>
          :  <Button onClick={signInGoogle} sx={{ml:"750px",color:"black",bgcolor:"white"}} variant='contained' size='small'>Signup</Button>}
          <Typography sx={{ml:"10px",color:"black"}}>{authData?.user?.displayName}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}