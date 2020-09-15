import React, { Component } from 'react'
import {login} from '../auth/UserFunctions'
import { RiLoginCircleLine } from 'react-icons/ri';
import logo  from '../img/logo.png'
import '../css/font.css'
export class Login_dash extends Component {


  constructor(){
    super()
    this.state ={
        email:'',
        password:'',
        alert:'',
        errors :{}
    }

    this.onChange =  this.onChange.bind(this)
    this.onSubmit =  this.onSubmit.bind(this)
}


onChange(e){
    this.setState({
        [e.target.name]:e.target.value
    })
}

onSubmit(e){
e.preventDefault()

const user ={
 role_id:1,
 email :this.state.email,
 password:this.state.password   

}

login(user).then(res=>{
   
  if(res.status ==401){
    this.setState({
      alert:401
    })
  console.log("email or password invalid")
  
  }else{
    this.props.history.push(`/orderdash`)
  }
  
  
  
     })

}

  render() {
    return (

      <div>
      
      <div>

<div className="container-fluid">
<div className="row">

{/* <Aside_bar/> */}

<main role="main" className="col-md-12 ml-sm-auto col-lg-12 px-md-4">





<div className="row d-flex justify-content-center">

    <div className="col-md-6 mt-5">
    
    
    
   





    <div className="bg-white p-5 shadow-lg text-center rounded">
    <img className="card-img-top  mt-4 w-25 mx-auto" src={logo}  alt=""/>
    <h2 className="mx-auto ml-3 font">  Oofood</h2>
       <p className="mx-auto ml-4">  Admin Dashboard</p>
      <div className="card-body">
      <form className="form-signin" noValidate onSubmit={this.onSubmit} mx-auto>
      
      <h1 className="h3  font-weight-normal"> Please sign in</h1>
      {this.state.alert==401 ? (

<div class="alert alert-danger" role="alert">
  email or password invalid
</div>
):(
<div >
 
</div>
)
}
      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        type="email"
       name="email"
        className="form-control my-3"
        placeholder="Email address"
        value={this.state.email}
        onChange={this.onChange}
        required
        autofocus
      />
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <input
        type="password"
        name="password"
        className="form-control"
        value={this.state.password}
        onChange={this.onChange}
        placeholder="Password"
        required
      />
    
      <button className="btn btn-lg btn-primary btn-block my-2" type="submit">
      <RiLoginCircleLine/>  Sign in
      </button>
   
     
    </form>
      </div>
    </div>
    
  </div>
    
   </div>




    </main>
   

   </div>
 </div>
</div>

               
 </div>
 

  )
  }
}

export default Login_dash
