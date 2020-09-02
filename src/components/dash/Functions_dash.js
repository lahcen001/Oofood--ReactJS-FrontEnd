import axios from 'axios'
export const getdash = dash =>{

    return axios.get('http://admin.lahcen-elhanchir.com/api/reservation').then(res=>{
      
        return res.data
    }) 
    .catch(err=>{
        console.log(err)
    })
}
///////////////////////////////////////////////////////////
export const getdashorder = getdash =>{

    return axios.get('http://admin.lahcen-elhanchir.com/api/getorder').then(res=>{
        console.log(res)
        return res.data
        console.log(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}
////////////
export const accepted = added =>{

    return axios.get(`http://admin.lahcen-elhanchir.com/api/accepted/${added}`).then(res=>{
        console.log(res)
        return res.data
        console.log(added)
    })
    .catch(err=>{
        console.log(err)
    })
}
//////////
export const inaccepted = added =>{

    return axios.get(`http://admin.lahcen-elhanchir.com/api/accepted/1`).then(res=>{
        console.log(res)
        return res.data
        console.log(added)
    })
    .catch(err=>{
        console.log(err)
    })
}
///////////////////////////

export const clientinfo = id =>{

    return axios.get(`http://admin.lahcen-elhanchir.com/api/reservation/${id}`).then(res=>{
    
        return res.data
       
    })
    .catch(err=>{
        console.log(err)
    })
}


