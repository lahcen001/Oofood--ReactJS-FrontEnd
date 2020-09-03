import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import {getProfile} from './auth/UserFunctions';
import {reser} from './data_export';
import {orderfun,reservfun } from './data_export';
import Footer from './Footer';
import Navbar from './auth/Navbar';

import axios from 'axios'

class Cart extends Component {
 
  constructor(){
        super()
        this.state ={
           id_user:'',
            adresse:'',
            phone:'',
            cart:'',
            selectedOption:'',
            pizzas:[],
         date: new Date().toLocaleString(),
           


            categorie_id:'',
            name:'',
            price:'',
            user_id:'',
             cont:[],
            imageURL:'',
        }

        this.onChange =  this.onChange.bind(this)
        this.onSubmit =  this.onSubmit.bind(this)
    }

    deleteOrder = (id)=>{
    
     console.log(id)
      

     axios.put(`http://admin.lahcen-elhanchir.com/api/remove/${id}`)
  .then((res)=>{
    console.log(res)
  });
  

  axios.get(`http://admin.lahcen-elhanchir.com/api/plats`).then(res=>{
      
    this.setState({ pizzas: res.data })
      }) 
     console.log(this.state.date)



   axios.get(`http://admin.lahcen-elhanchir.com/api/plats`).then(res=>{
      
      this.setState({ pizzas: res.data })
        }) 
      console.log(this.state.date)
      }
          

componentDidMount(){
  axios.get(`http://admin.lahcen-elhanchir.com/api/plats`).then(res=>{
      
  this.setState({ pizzas: res.data })
    }) 
   


    getProfile().then(res=>{
    if(res){
     this.setState({
      adresse :res.adresse,
      phone:res.phone,
      selectedOption: res.ville
   
     })
    }
    }
    )

   
}


 
   
onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
      this.setState({cont:e.target.value});
             
      
    }
    
   
    handleOptionChange =(changeEvent)=> {
      this.setState({
        selectedOption: changeEvent.target.value
      })
    }
  
    
  
    

onSubmit(e){
    e.preventDefault()
    
  
    
    const reservation ={
  
     adresse :this.state.adresse,
     phone:this.state.phone,
     ville: this.state.selectedOption
    
    }
    
    const  order1 = this.props.cartPizzas.filter(p => p.is_added==1)
    

    order1.forEach(ele => {
      
    const order ={
      
        user_id:localStorage.id,
        order_name:ele.name,
        price:ele.price,
        cont:ele.cont,
        imageURL:ele.image1,
        date:this.state.date
       }

       orderfun(order).then(res=>{
        console.log('my orders',res)
      });
    
      })
      

      reservfun(reservation).then(res=>{
       console.log("res")
    
    
      });

     
     this.props.history.push("/ordered");
    
    }

    
   


    render() {
        const addedPizzas = this.state.pizzas.filter(p => p.is_added==1);
     
        
      
        let tot = 0;
        addedPizzas.forEach(element => {
          
            // element.is_added =0;
            tot += parseFloat(element.price*element.cont);
        });

console.log(this.props)
        return (
          

<div >

{
            !(localStorage.usertoken &&  localStorage.role==2) ? (
              <Redirect to ="/login"></Redirect>
            ) :(

<div>

<Navbar pizzas={this.props.cartPizzas} />

{/* <Slide/> */}

<div className="container  mt-5 mb-5 shadow-lg p-5 bg-light rounded">

  <div className="row">
    <div className="col-md-8 order-md-2 mb-4 ">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Votre Panier</span>
        <span className="badge badge-secondary badge-pill">{addedPizzas.length}</span>
      </h4>
      <ul className="list-group mb-3">

      {addedPizzas.map((item, idx) => (

        <li className="list-group-item d-flex justify-content-between lh-condensed shadow rounded" key={idx}>
          <div>
          <img src={'http://admin.lahcen-elhanchir.com/storage/'+item.image1} class="img-fluid img-thumbnail" alt="Sheep"  width="100" height="100"/>
            
          </div>
          <div>
          <span className="text-muted mr-2">{item.cont} </span>
         
           
          </div>
          <h6 className="my-0">{item.name}</h6>
         
          <div>
          <span className="text-muted mx-2 "> {(item.price)*(item.cont)} MAD</span>

<button type="button" onClick={() => this.deleteOrder(item.id)}  className="btn btn-dark"><h5>-</h5></button>
          </div>
        </li>
        ))}
       
        <li className="list-group-item d-flex justify-content-between shadow rounded">
          
          <span>Total </span>
          <strong>{tot.toFixed(2)} MAD</strong>
        </li>
      </ul>
      
    </div>
  <form className="col-md-4 order-md-1 shadow p-3 rounded bg-white"  onSubmit={this.onSubmit.bind(this)}>

      <h4 className="mb-3">Billing address</h4>
    
    <div className="row">
       
          
        <div className="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="address2">
           Phone 
          </label>
          <input
            type="text"
            value={this.state.phone}
            className="form-control"
            onChange={this.onChange}
            name="phone"
         
            placeholder="PHONE"
          />
       
          <div className="invalid-feedback">
         
          </div>
        </div>
        <div className="mb-3">
  
          
         
             <div class="form-group">
         <label for="exampleFormControlTextarea1">  Address</label>
        <textarea  name="adresse"  onChange={this.onChange} class="form-control"  value={this.state.adresse}   id="exampleFormControlTextarea1" rows="3"/>
         </div>

     
      
        </div>
 
  <hr className="mb-4" />
    <div className="radio">
         <label>
        <input type="radio" value="Casablanca" 
                      checked={this.state.selectedOption === 'Casablanca'} 
                      onChange={this.handleOptionChange} />
          Casablanca
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="Tanger" 
                      checked={this.state.selectedOption === 'Tanger'} 
                      onChange={this.handleOptionChange}/>
          Tanger
      </label>
    </div>
    



   <hr className="mb-4" />
      
        <button className="btn btn-primary btn-lg btn-block my-2 shadow "   type="submit">Passer La Commande </button>
        <Link to='/commander'><div className="btn btn-danger btn-lg btn-block my-2 shadow" type="button"> Retour</div></Link>
       
      

    </form>
  </div>
</div>


<Footer/>
</div>
            )
          }

     </div>
   
        )
    }
}

export default Cart;


