import React , {Component} from 'react';
import {register} from './UserFunctions';

import Navbar from './Navbar';
import '../css/font.css'
import Footer from '../Footer';
import logo  from '../img/logo.png'
import { FaRegistered } from 'react-icons/fa';

class Register extends Component {
    constructor(){
        super()
        this.state ={
            firt_name:'',
            last_name:'',
            email:'',
            password:'',
           
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
    const newUser ={
     name :this.state.first_name + ' ' +this.state.last_name,
     email :this.state.email,
     password:this.state.password  
    
    }

   register(newUser).then(res=>{
   
    this.props.history.push(`/login`)

   })

}

render(){


    return (
 
<div>
<Navbar pizzas={this.props.pizzas} />

{/* <Slide/> */}
 <div className="container mt-5 mb-5">
   <div className="row d-flex justify-content-center">
<div className="col-md-12 col-sm-12 col-lg-8  mb-5">



<div class="bg-white p-5 shadow-lg text-center rounded" >
<img className="card-img-top  mt-4 w-25 mx-auto" src={logo}  alt=""/>
    <h2 className="mx-auto ml-3 font">  Oofood</h2>
     
  <div class="card-body">
   




<form className="form-signin"  onSubmit={this.onSubmit} mx-auto>
 
  <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
  <label htmlFor="inputEmail" className="sr-only">
  Fist Name
  </label>
  <input
  type="text"
  name="first_name"
    className="form-control  my-3"
    placeholder="  Fist Name"

    value={this.state.first_name}
    onChange={this.onChange}
    required
    autofocus
  />
  <label htmlFor="inputEmail" className="sr-only">
  Last Name
  </label>
  <input
     type="text"
     name="last_name"
    className="form-control my-3"
    placeholder="Last Name"
    value={this.state.last_name}
    onChange={this.onChange}
    required
    autofocus
   
  />
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
    className="form-control  my-3"
    value={this.state.password}
onChange={this.onChange}
    placeholder="Password"
    required
    autofocus
  />
  
  <button className="btn btn-lg btn-danger btn-block my-2" type="submit">
  <FaRegistered/> S'inscrire
  </button>
 
 
</form>


</div>
</div>


</div>

</div>
</div>
<Footer/>
</div>


)
}
}

export default Register