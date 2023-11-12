import { createContext, useState, useEffect } from "react";
import { getCollectionAndDocuments } from '../utils/firebase/firebase.utils.js'



export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
    const [ categoriesMap, setCategoriesMap ] = useState({});
    const value = { categoriesMap };
   
    useEffect(() => {
        const getCategoriesMap = async () => {
           const categoryMap = await getCollectionAndDocuments('categories')
           setCategoriesMap(categoryMap)
        } 

        getCategoriesMap()
    }, [])
    console.log(value)

    return <CategoriesContext.Provider value={value}>{ children }</CategoriesContext.Provider>
}

