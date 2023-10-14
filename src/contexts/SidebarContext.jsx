import React, {createContext, useState} from "react";

export const SidebarContext = createContext()

const SidebarContextProvider = ({children}) => {

    const [option, setOption] = useState(null)

    return (

        <SidebarContext.Provider value={{option, setOption}}>
            {children}
        </SidebarContext.Provider>
    )

}

export default SidebarContextProvider