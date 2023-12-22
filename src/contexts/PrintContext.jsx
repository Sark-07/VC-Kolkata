import React, { createContext, useState } from 'react'
export const PrintContext = createContext()
const PrintContextProvider = ({children}) => {
    const [printData, setPrintData] = useState(null)

    return (

        <PrintContext.Provider value={{printData, setPrintData}}>
            {children}
        </PrintContext.Provider>
    )
}

export default PrintContextProvider