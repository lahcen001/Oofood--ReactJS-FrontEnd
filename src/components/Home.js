import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

import {getcategorie} from './data_export';

import Navbar from './auth/Navbar';

import Footer from './Footer';
import './css/font.css'

import { MdRestaurantMenu} from 'react-icons/md';

class Home extends Component {

    constructor(props){
        super(props)
        this.state ={
            catego:[],
            platcatego:[],
            cont:0,
            loading:false,
        }
    }

    componentDidMount(){

        getcategorie().then(res=>{
         this.setState({
        catego:res
         })
         console.log(this.state.catego)
})

    const a = this.props.pizzas
    if( a.is_added == 1){

        this.setState({
            cont:a.length
        })
        
    }



    console.log(this.state.cont)
      }
     

     
    render() {
        
//         const loginRegLink = (
    
              
// <Link to='/login'><div className="btn btn-primary btn-lg btn-block my-2 shadow" type="button"><TiShoppingCart/>  Check-Out </div></Link>
              
//         )

//         const userLink = (
            
// <Link to='/cart'><div className="btn btn-primary btn-lg btn-block my-2 shadow" type="button"><TiShoppingCart/>  Check-Out </div></Link>
               
//         )


        
        return (
           
<div>
<Navbar pizzas={this.props.pizzas} />

{/* <Slide/> */}
<div className="container mt-3 mb-3 shadow-lg shadow rounded  bg-white">
<div className="">
<div className="col-md-12  col-lg-12 col-sm-12 pt-5"  align="center">
{/* <h1 className="mb-5 mt-3   pt-2 pb-2 shadow rounded-light"><MdRestaurantMenu/> Menu</h1> */}








 

<button type="button  " onClick={() => this.props.fetcher()}  className="btn  mx-2 "><h4 className="h3 font">Tous les plats</h4></button>

{this.state.catego.map((item,index) => (
   
<button type="button" onClick={() => this.props.platcat(item.id)}  className="btn  mx-2 "><h4 className="h3 font ">{item.name}</h4></button>
           )) } 
         
       
         
             </div>
<div className="col-md-2">
{/* {localStorage.usertoken ? userLink : loginRegLink} */}

</div>
           </div>
                <div className="row p-5">
                    {this.props.pizzas.map((item, idx) => (
                        <Item 
                     item={item} 
                     key={idx} 
                       onAddToCart={this.props.onAddToCart}
                    onRemoveFromCart={this.props.onRemoveFromCart} 
          />
      ))} 
                    
</div>
              
               
               
                </div>
                <Footer/>
               </div>
        )
    }
}

export default Home;