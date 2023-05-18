import  { React,useEffect,useState } from 'react'
import './Navbar.css'

function Navbar() {

    const [show,setShow]=useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>420){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    },[])
    console.log(show);
  return (
    <div className={`nav ${show && 'navBlack'}`}>
    <img 
    style={{width:'140px'}}
    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'/>
    </div>
  )
}

export default Navbar