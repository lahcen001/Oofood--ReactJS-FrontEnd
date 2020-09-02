import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import logo  from './logo.svg'
import Navbar from './auth/Navbar';



class Paniervide extends Component {





    render () {
       

        return (
        

<div>

{
            !(localStorage.usertoken &&  localStorage.role==2)? (
              <Redirect to ="/login"></Redirect>
            ) :(

<div>
<Navbar pizzas={this.props.pizzas}/>

<div className="container">
  <div className="jumbotron mt-3">
    <img src={logo} className="w-25" alt=""/>
    <h1>BestMenu </h1>
    <p className="lead">
   <h3 className="text-dark">Votre Panier est Vide</h3> 

    <br/>
    <hr/>
   {/* <h3> Après un certain temps, vous recevez un appel de confirmation de commande </h3> */}
   
 {/* <br/> <Link to='/profile' 
    className="btn btn-lg btn-dark"
    href="/docs/4.5/components/navbar/"
    role="button"
    >Dashboard</Link> */}
    </p>
    <Link to='/commander' 
    className="btn btn-lg btn-primary"
    href="/docs/4.5/components/navbar/"
    role="button"
    >
    Retour au Menu
   </Link>
  </div>
</div>
</div>
            )
          }

     </div>
        )
    }
}

export default Paniervide;
