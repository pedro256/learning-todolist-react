import React from 'react'
export const GlobalContext = React.createContext();
export const GlobalStorage = ({children}) =>{

    const [expandedNav,setExpandedNav] = React.useState(false)

    React.useEffect(()=>{
        const local = window.localStorage.getItem("expandedNav")
        setExpandedNav(local? local:false)
    },[])


    return (
        <GlobalContext.Provider 
        value={
            {
                expandedNav,
                setExpandedNav
            }
        }>
        {children}
        </GlobalContext.Provider>
    )
}