import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import logo  from './logo.svg'
import Navbar from './auth/Navbar';



class Ordered extends Component {


//   constructor(props) {
//     super(props);
//     this.onAddToCart = this.onAddToCart.bind(this);
//     this.onRemoveFromCart = this.onRemoveFromCart.bind(this);
// }


   componentDidMount(){

  


    axios.get(`http://admin.lahcen-elhanchir.com/api/plats`).then(res=>{
      
  
     res.data.forEach(ele => {
      
       
       
          
        axios.put(`http://admin.lahcen-elhanchir.com/api/updateall/${ele.id}`,{
          is_added:0,
          cont:1
   

        },
        {
          headers: {'Content-Type':'application/json'}
          }).then(res=>{
            console.log(res)
          
          })
          .catch(err=>{
            console.log(err)
          })

            this.props.onRemoveFromCart(ele)


          });
        
          })

 }

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
  <div className="jumbotron  bg-white  m-3">
    <img src={logo} className="w-25" alt=""/>
    <h1>BestMenu </h1>
    <p className="lead">
   <h3 className="text-dark">Votre Commande est Reçue</h3> 

  
   
   <h3> Après un certain temps, vous recevez un appel de confirmation de commande </h3>
  
  

  <Link to='/profile' 
    className="btn btn-lg btn-dark m-2"
    href="/docs/4.5/components/navbar/"
    role="button"
    >Dashboard</Link>
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

export default Ordered;