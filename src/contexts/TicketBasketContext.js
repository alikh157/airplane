import React, {useState} from "react";

export const TicketBasketContext = React.createContext({
    ticketBasket: [], setTicketBasket: () => {
    }
})

export function TicketBasketContextProvider({children}) {
    const [ticketBasket, setTicketBasket] = useState([]);
    return (
        <TicketBasketContext.Provider value={{ticketBasket,setTicketBasket}}>
            {
                children
            }
        </TicketBasketContext.Provider>
    )
}