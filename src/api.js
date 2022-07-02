import axios from "axios";
import {Deserializer} from "jsonapi-serializer";
import apiConstant from "./apiConstant";

export const readAllTickets = ({onError=()=>{}, onSuccess=()=>{}}) => {
    axios({
        method: 'post',
        url: apiConstant.BASE_URL + '/ticket/get'
    }).then((res)=>{

        new Deserializer({keyForAttribute: "camelCase"}).deserialize(res.data,(error,tickets)=>{
            onSuccess(tickets);
        })
    }).catch((error)=>{
        onError(error);
    })
}