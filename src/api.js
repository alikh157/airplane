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
        });
    }).catch((error)=>{
        onError(error);
    })
}
export const readAllTrips = ({onError=()=>{}, onSuccess=()=>{}}) => {
    axios({
        method: 'post',
        url: apiConstant.BASE_URL + '/trip/read/all'
    }).then((res)=>{
        new Deserializer({keyForAttribute: "camelCase"}).deserialize(res.data,(error,tickets)=>{
            onSuccess(tickets);
        });
    }).catch((error)=>{
        onError(error);
    })
}
export const tripSearch = ({onError=()=>{}, onSuccess=()=>{}, data}) => {
    axios({
        method: 'post',
        url: apiConstant.BASE_URL + '/customer/ticket/search',
        data:data
    }).then((res)=>{
        new Deserializer({keyForAttribute: "camelCase"}).deserialize(res.data,(error,tickets)=>{
            onSuccess(tickets);
        });
    }).catch((error)=>{
        onError(error);
    })
}
export const loginAccount = (account,{onError=()=>{}, onSuccess=()=>{}}) => {
    axios({
        method: 'post',
        url: apiConstant.BASE_URL + '/account/login',
        data:account
    }).then((res)=>{
        onSuccess(res.data.data.attributes['auth-token'])
    }).catch((error)=>{
        onError(error);
    })
}
export const registerAccount = (account,{onError=()=>{}, onSuccess=()=>{}}) => {
    axios({
        method: 'post',
        url: apiConstant.BASE_URL + '/account/create',
        data:account
    }).then((res)=>{
        onSuccess(res.status)
    }).catch((error)=>{
        onError(error);
    })
}
export const updateAccount = (account,{onError=()=>{}, onSuccess=()=>{}}) => {
    axios({
        method: 'post',
        url: apiConstant.BASE_URL + '/account/update',
        data:account
    }).then((res)=>{
        onSuccess(res.status)
    }).catch((error)=>{
        onError(error);
    })
}
export const readAccount = ({onError=()=>{}, onSuccess=()=>{}}) => {
    axios({
        method: 'post',
        url: apiConstant.BASE_URL + '/account/read',
        headers:{
            'auth-token':window.localStorage.getItem("auth-token")
        }
    }).then((res)=>{
        new Deserializer({keyForAttribute: "camelCase"}).deserialize(res.data,(error,accountInfo)=>{
            onSuccess(accountInfo);
        });
    }).catch((error)=>{
        onError(error);
    })
}