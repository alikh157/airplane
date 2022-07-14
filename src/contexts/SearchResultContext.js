import React, {useState} from "react";

export const SearchResultContext = React.createContext({
    searchResult: [], setSearchResult: () => {
    }
})

export function SearchResultContextProvider({children}) {
    const [searchResult, setSearchResult] = useState([]);
    return (
        <SearchResultContext.Provider value={{searchResult,setSearchResult}}>
            {
                children
            }
        </SearchResultContext.Provider>
    )
}