import React, {useState} from "react";

export const AccountContext = React.createContext({
   myAccount: {}, setMyAccount: () => {
    }
})

export function AccountContextProvider({children}) {
    const [myAccount, setMyAccount] = useState({});
    return (
        <AccountContext.Provider value={{myAccount,setMyAccount}}>
            {
                children
            }
        </AccountContext.Provider>
    )
}