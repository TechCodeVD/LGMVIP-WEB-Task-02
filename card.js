
import {rgbToHex} from '@mui/material'
import React from 'react'
import './Cards.css'
export default function Cards(props) {
console.log(props.email)
  return (

      <div className='flex_card' style={{borderRadius:"10px", padding:"10px",border:"1px solid black", backgroundColor:"whitesmoke"}}>
      <img src={props.avatar} alt='user image'/>
      <p >{props.email}</p>
      <p>{props.first_name} {props.last_name}</p>
      <div className='flex_card' style={{borderRadius:"10px", padding:"10px",border:"1px solid black", backgroundColor:"#eeeee4",textAlign:"left",fontSize:"20px"}}>
      <img src={props.avatar} alt='user image' style={{ width:"130px",margin:"0 30%" ,padding:"4px",border:"3px solid black"}}/>
      <p className='text'> <span className='value'>Name: </span>{props.first_name} {props.last_name}</p>
      <p className='text'><span className='value'>Email-Id: </span> {props.email}</p>
      </div>

  )
}