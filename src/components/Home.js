
import React, {Component} from 'react';

import Item from './Item';

import {getcategorie} from './data_export';

import Navbar from './auth/Navbar';

import Footer from './Footer';
import './css/font.css'

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
        


        
        return (
           
<div>
<Navbar pizzas={this.props.pizzas} />

{/* <Slide/> */}
<div className="container mt-3 mb-3 shadow-lg shadow rounded  bg-white">
<div className="">
<div className="col-md-12  col-lg-12 col-sm-12 pt-5"  align="center">


<button type="button  " onClick={() => this.props.fetcher()}  className="btn  mx-2 "><h4 className="h3 font">Tous les plats</h4></button>

{this.state.catego.map((item,index) => (
   
<button type="button" onClick={() => this.props.platcat(item.id)}  className="btn  mx-2 "><h4 className="h3 font ">{item.name}</h4></button>
           )) } 
         
       
         
             </div>
<div className="col-md-2">


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