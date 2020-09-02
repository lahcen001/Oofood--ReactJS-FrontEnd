import axios from 'axios';
export const  reservfun = reservation =>{
    console.log( reservation)
    return axios.put(`http://admin.lahcen-elhanchir.com/api/updateuser/${localStorage.id}`, reservation, {
   headers: {'Content-Type':'application/json'}
    }).then(res=>{
        console.log("lahcen")
    })
    .catch(err=>{
        console.log(err)
    })
}
//////////////////////////////////////////////////////////////
export const orderfun = order =>{
    console.log(order)
    return axios.post('http://admin.lahcen-elhanchir.com/api/order', order, {
   headers: {'Content-Type':'application/json'}
    }).then(res=>{
        console.log(res)
    })
    .catch(err=>{
       return err.response
    })
}


///////////////////////////////////////////////////////////

export const getcategorie = newUser =>{
    

    console.log(localStorage.id)


    return axios.get(`http://admin.lahcen-elhanchir.com/api/categorie`).then(res=>{
      
        return res.data
    }) 
    .catch(err=>{
        console.log(err) 
    })




    
}

