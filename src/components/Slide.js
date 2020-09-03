import React, { Component } from 'react'
import './slider.css'
import './css/font.css'
import logo  from './img/logo.png'

export class Slide extends Component {
  render() {
    return (
    
        
  <div className="jumbotron jumbotron bg-cover shadow mb-0">
         <div className="justify-content-center">
    <div className="overlay"></div>
    <div className="container">
   
    <div  className="display-3 mb-1">
  
    <img src={logo} alt="" width="40px" className="w-25"/>
     <h1 className="display-3 mb-1 text-white  font" > BestMenu</h1>
     </div>




     {/* <h1 class="cd-headline letters type">
			<span>Order food online in </span> 
			<span class="cd-words-wrapper waiting">
				<b class="is-visible">pizza</b>
				<b>CASABLANCA</b>
				<b>TANGER</b>
			</span>
		</h1> */}
 
      <h4 className="lead">Order food online in  <span>CASABLANCA & TANGER</span></h4>
      
    </div>
    </div>
  </div>


    )
  }
}

export default Slide
