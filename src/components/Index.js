import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Itempage from './Itempage';
import axios from 'axios';

import Login_dash from './dash/Login_dash';
import Order_dash from './dash/Order_dash';
import Ajout from './dash/Order_ajout';
import Clientinfo from './dash/Clientinfo';





import Home from './Home';

import Profile from './auth/Profile';
import Cart from './Cart';

import Homepage from './Homepage';
import Paniervide  from './Paniervide';
import Ordered from './Ordered';
import Login from './auth/Login';
import Register from './auth/Register';

import{Link , withRouter} from 'react-router-dom'
import Order_ref from './dash/Order_ref';
import Profile1 from './auth/Profile1';
import Annuler_client from './dash/Annuler_client';
import ConfirmerClient from './dash/ConfirmerClient';


export class Index extends Component {

  constructor(props) {
    super(props);
    this.onAddToCart = this.onAddToCart.bind(this);
    this.onRemoveFromCart = this.onRemoveFromCart.bind(this);
}

state = {
    pizzas: []
}

////////////////////////////////////////////////////////////
componentDidMount() {
this.fetcher();

}

// grab posts from laravel backend
fetcher = () => {


// axios.get('http://admin.lahcen-elhanchir.com/api/plats')
//     .then(data => this.setState({ pizzas: data }));




axios.get(`http://admin.lahcen-elhanchir.com/api/plats`).then(res=>{
  localStorage.setItem("plat", res.data)
  this.setState({ pizzas: res.data })
    }) 

}

// add to cart
// onAddToCart = (item) => {
//     fetch('http://admin.lahcen-elhanchir.com/api/add/' + item.id, {
//         method: 'PUT',
//         body: JSON.stringify(item),
//         headers : { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//     });


//     this.fetcher();
// }



onAddToCart = (item) => {
  axios.put(`http://admin.lahcen-elhanchir.com/api/add/${item.id}`)
  .then((res)=>{
    console.log(res)
  });
 
  this.fetcher();
  this.fetcher();
}

onRemoveFromCart = (item) => {
  axios.put(`http://admin.lahcen-elhanchir.com/api/remove/${item.id}`)
  .then((res)=>{
    console.log(res)
  });
  console.log('lahcen')
  this.fetcher();
  this.fetcher();
}





// // remove from cart
// onRemoveFromCart = (item) => {
//     fetch('http://admin.lahcen-elhanchir.com/api/remove/' + item.id, {
//         method: 'PUT',
//         body: JSON.stringify(item),
//         headers : { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//     });

//  this.fetcher();

// }

platcat=(item)=>{

axios.get(`http://admin.lahcen-elhanchir.com/api/platscategorie/${item}`).then(res=>{
  this.setState({
    pizzas:res.data
      
  })
  console.log('lahcen',res.data)
  })
  .catch(err=>{
      console.log(err)
  })
}






  render() {
    return (

<div >
<Router>

  <Route  exact path="/" render={(props) =>
                 <Homepage {...props} pizzas={this.state.pizzas}/>
                } />
    

     


   <Route exact path='/commander' render={() => 
                 <Home 
                     pizzas={this.state.pizzas} 
                     onAddToCart={this.onAddToCart}
                     fetcher={this.fetcher}
                     platcat={this.platcat}
                     onRemoveFromCart={this.onRemoveFromCart}
         />}
             />
 <Route exact path='/cart' render={(props) =>
                 <Cart {...props} cartPizzas={this.state.pizzas}/>
             }/>
        <Route exact path='/ordered' render={() =>
                 <Ordered 
                 onRemoveFromCart={this.onRemoveFromCart}
                      />
             } />
      
       <Route  exact path="/register" render={(props) =>
                 <Register {...props} pizzas={this.state.pizzas}/>
                }  />
       {/* <Route  exact path="/login" component={Login}  /> */}


       <Route exact path='/login' render={(props) =>
                 <Login {...props} pizzas={this.state.pizzas}/>
                } />

      
       <Route  exact path="/profile" render={(props) =>
                 <Profile {...props} pizzas={this.state.pizzas}/>
                } />
       <Route  exact path="/profile1" render={(props) =>
                 <Profile1 {...props} pizzas={this.state.pizzas}/>
                } />
       <Route  exact path="/itempage/:id" render={(props) =>
                 <Itempage {...props} pizzas={this.state.pizzas}/>
                } />
    
       <Route exact path="/admin" component={Login_dash}/>
       
    
       <Route   exact path="/ajoutdash" component={Ajout}/>
       <Route   exact path="/client/:id" component={Clientinfo}/>
       {/* <Route   exact path="/orderdash" component={Order_dash}/> */}
       <Route   exact path="/orderref" component={Order_ref}/>
       <Route   exact path="/userprofile" component={Profile1}/>
       <Route   exact path="/annulerclient" component={Annuler_client}/>
       <Route   exact path="/confirmerecep" component={ConfirmerClient}/>
       <Route exact path='/orderdash' render={(props) =>
                 <Order_dash {...props}/>
                            } />

<Route exact path='/paniervide' render={(props) =>
                 <Paniervide  {...props}/>
                            } />
   
</Router>

 </div>
    )
  }
}



export default withRouter(Index)