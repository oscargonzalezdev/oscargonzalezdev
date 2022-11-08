import { createContext, useState } from 'react'

const DataContext = createContext({})

function DataContextProvider(props) {
    const [elementInView, setElementInView] = useState({works: false, posts: false, contact: false})

    return (
        <DataContext.Provider
            value={{
                elementInView,
                setElementInView
            }}>
            {props.children}
        </DataContext.Provider>
    )
}

export { DataContext, DataContextProvider }