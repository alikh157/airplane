import React, {useEffect, useState} from "react";

export const TicketBasketContext = React.createContext({
    ticketBasket: [], setTicketBasket: () => {
    }
})

export function TicketBasketContextProvider({children}) {

    const ticketBasketLs = JSON.parse(localStorage.getItem("ticketBasket"))
    const [ticketBasket, setTicketBasket] = useState(ticketBasketLs ? ticketBasketLs:[]);
    useEffect(() => {
        window.localStorage.setItem("ticketBasket",JSON.stringify(ticketBasket))
        let sortedTicketBasket = ticketBasket;
        sortedTicketBasket.sort((a, b)=>{
            if (a.amount >= b.amount){
                return -1
            }
            else{
                return 1
            }
        })
        setTicketBasket(sortedTicketBasket)
    }, [ticketBasket]);
    return (
        <TicketBasketContext.Provider value={{ticketBasket,setTicketBasket}}>
            {
                children
            }
        </TicketBasketContext.Provider>
    )
}