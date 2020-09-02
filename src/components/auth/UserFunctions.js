//////////////////////////////////////////////////////////////////////////////
import axios from 'axios';
export const register = newUser =>{

    return axios.post('http://admin.lahcen-elhanchir.com/api/register', newUser, {
   headers: {'Content-Type':'application/json'}
    }).then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}


export const update = userp =>{

    return axios.put(`http://admin.lahcen-elhanchir.com/api/users/${localStorage.id}`, userp, {
   headers: {'Content-Type':'application/json'}
    }).then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
        return err.response
    })
}

/////////////////////////////////////////////////////////////////////////////
export const login = user=>{



    return  axios.post('http://admin.lahcen-elhanchir.com/api/login', {
        email:user.email,
        password:user.password,
        role_id:user.role_id

    }, {
   headers: {'Content-Type':'application/json'}
     })
    .then(res=>{
       localStorage.setItem("usertoken", res.data.token)
       localStorage.setItem("id", res.data.id.id)
       localStorage.setItem("role", res.data.id.role_id)
       localStorage.setItem("name", res.data.id.name)
       console.log(res)
      return res
     
    })
    .catch(err=>{
        return err.response
       
    })
}
/////////////////////////////////////////////////////////////////////////////////

export const getProfile = newUser =>{
    

    console.log(localStorage.id)

    return axios.get(`http://admin.lahcen-elhanchir.com/api/user/${localStorage.id}/detail`,{
   headers: {Authorization:`Bearer ${localStorage.usertoken}`}
    }).then(res=>{
      
        return res.data
    }) 
    .catch(err=>{
        console.log(err) 
    })


    
}
/////////////////////////////////////////////////////////////////////////////////