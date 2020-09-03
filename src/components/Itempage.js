import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Disqus from "disqus-react";
import axios from 'axios'
import Slide from './Slide';
import Navbar from './auth/Navbar';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export class Itemplat extends Component {

    state ={
        item :{}
    }
    
      componentWillMount(){
    const id=  this.props.match.params.id;
    
    axios.get(`http://admin.lahcen-elhanchir.com/api/plats/${id}`)
    .then(res =>{
    this.setState({
       item:res.data
    })
    
    }
        
        
        
        ) 
    
      }

     

    render() {
        const disqusShortname = "bestmenu"
    const disqusConfig = {
      url: `http://localhost:3000/${this.props.match.params.id}`,
      identifier:this.props.match.params.id,
      title: this.state.item.name

    }

const image1 = `http://admin.lahcen-elhanchir.com/storage/${this.state.item.image1}`
const image2 = `http://admin.lahcen-elhanchir.com/storage/${this.state.item.image2}`
const image3 = `http://admin.lahcen-elhanchir.com/storage/${this.state.item.image3}`


console.log(image1 )




        return (
          
<div>
<Navbar/>

<div className="container">   
<div className="row mt-5 mb-5 bg-white shadow p-5 rounded ">
<div className="col-lg-8  col-md-12  col-sm-12  rounded-3 ">
<Carousel>
                <div>
                    <img src={image1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={image2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={image3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
 </Carousel>

  {/* <Link to='/commander'><div className="btn btn-primary btn-lg btn-block my-2" type="button"> Retour</div></Link> */}

</div>

<div className="col-lg-4  col-md-12  col-sm-12 shadow-sm rounded p-3">
    <h1 className="mb-2 font"> {this.state.item.name}</h1>

   
<h2>  <span class="badge badge-success">Prix :{this.state.item.price} MAD</span></h2>
<br/>
<br/>
<br/>
<h3 className="font">DESCRIPTION</h3>
<p>
{this.state.item.description1}
</p>
<br/>
<p>
{this.state.item.description2}
</p>
<br/>
<h3 className="font">INGRÉDIENTS</h3>
<p>
{this.state.item.description3}
</p>
<br/>
</div>
<div className="   col-md-12">
<Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
   </div>
</div>






</div>



</div>
        )
    }
}

export default Itemplat
