import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Room = () => {
    const [roomcode,setRoomcode] = useState('')
    const navigation = useNavigate()

    const handlesubmit = (e)=>{
        e.preventDefault();
        navigation(`/videoconference/${roomcode}`)

    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type='number' placeholder='Enter your room number' value={roomcode} onChange={(event)=>setRoomcode(event.target.value)}></input>
            <button type='submit'>Enter Room</button>
        </form>
    </div>
  )
}
