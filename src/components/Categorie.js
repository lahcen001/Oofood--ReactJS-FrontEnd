import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/hover.css';
import './css/button.css';
import './css/card.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import {ImMinus } from 'react-icons/im';
import { BiPlusMedical } from 'react-icons/bi';

class Categorie extends Component {

  

  constructor(props) {
    super(props);
    this.state = {cont: ''};

  
  }


 onChange(e,item){
    

  if(item.is_added==1){
 console.log(e.target.value)
 console.log(item.id)
}
   



axios.put(`http://admin.lahcen-elhanchir.com/api/quantite/${item.id}`, {
  cont:e.target.value,
 

}, {
headers: {'Content-Type':'application/json'}
}).then(res=>{


})
.catch(err=>{
  console.log(err)
})


}


  onSubmit(e){
    e.preventDefault()
  
    
    }

data(item){
  console.log(item)
}



    // add or remove from cart
    toggleCart = (item) => {
  

      



    console.log(item)
        if (item.is_added==1)
             this.props.onRemoveFromCart(item);        
            if (item.is_added==0)
            this.props.onAddToCart(item);



      
     
    }

    






    render() {
        


        const url = 'http://admin.lahcen-elhanchir.com/storage/' + this.props.item.image1;
        console.log(url)
        return (


<div className="col-lg-4 col-md-12  col-sm-12 mt-4  mb-3 ">
  <div className="card profile-card-5 shadow-lg">
  <Link to={'/itempage/'+this.props.item.id} >
    <div className="card-img-block">
      <img
        className="card-img-top w-100"
        src={url}
        alt="Card image cap"
      />
    </div>
    </Link>
    <div className="card-body pt-0">
      <h5 className="card-title"> {this.props.item.name}</h5>
      

<div className="row">
<div className="col-md-12">
      <h4 className="text-muted"> <span className="badge badge-primary">  {this.props.item.price} MAD </span>  </h4>


      </div>
      <div className="col-md-2 ">

      {this.props.item.is_added==1  ? (


<button type="submit" onClick={   () => this.toggleCart(this.props.item )   }    className="btn  btn-danger "><ImMinus/></button>       
     ):(
       <button type="submit" onClick={   () => this.toggleCart(this.props.item )   }    className="btn btn-dark  "><BiPlusMedical/></button>
     )}

</div>



<div className="col-md-4 justify-content-center">

<form className="needs-validation"  onSubmit={this.onSubmit}>

      

<select  onChange={(e,item)=>this.onChange(e,this.props.item) }  className="custom-select ">


<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
</select>


</form>
</div>


</div>




    </div>
  </div>
</div>

          


        )
    }
}

export default Categorie;