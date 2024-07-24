import { useState } from "react";
import UserContext from "./UserContext";

import React from 'react'

const UserContextProvider = ({children}) => {

    const [color, setcolor] = useState(false);


  return (
    

<UserContext.Provider value={{color,setcolor}}>

{children}
</UserContext.Provider>

  )
}

export default UserContextProvider
