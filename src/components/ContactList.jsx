import React from 'react'

import Contact from './Contact'
import users from '../util/Data'


const ContactList = () => {
    
  return (
    <>
    {
        users.map((user,id)=>(
            <Contact key={id} user={user} /> 
        ))
    }
    </>
  )
}

export default ContactList