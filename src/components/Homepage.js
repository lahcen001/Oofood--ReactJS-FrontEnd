import React, { Component } from 'react'
import Slide from './Slide';
import { Link } from 'react-router-dom';
import Navbar from './auth/Navbar';
import Footer from './Footer';
import Caresoul from './Caresoul';
import { GiFoodTruck } from 'react-icons/gi';
import { RiLoginCircleLine } from 'react-icons/ri';
import { FaRegistered } from 'react-icons/fa';
import { AiFillDashboard } from 'react-icons/ai';

export class Homepage extends Component {
  render() {
    let message
if (!localStorage.usertoken){


     message = (
      <div className="row">
    
      
               <div> <Link to="/commander" className="btn btn-secondary btn-lg  my-2 shadow">
                            <h5 className="font"><GiFoodTruck/> Commander</h5> 
                          </Link></div>
                <div className="mx-4"> <Link to="/login" className="btn btn-danger btn-lg  my-2 shadow">
                            <h5 className="font"><RiLoginCircleLine/> Connexion</h5> 
                          </Link></div>
                         
                          <div> <Link to="/register" className="btn btn-danger btn-lg  my-2 shadow">
                            <h5 className="font"><FaRegistered/> Inscription</h5> 
                          </Link></div>
                   
      
    
                         
               </div>
    )
  }
  else {
    message = (
      <div className="row">
    
      
               <div> <Link to="/commander" className="btn btn-secondary btn-lg  my-2 shadow">
               <h5 className="font"><GiFoodTruck/> Commander</h5> 
                          </Link></div>
                <div className="mx-4"> <Link to="/profile" className="btn btn-danger btn-lg  my-2 shadow">
                            <h5><AiFillDashboard/> Dashboard</h5> 
                          </Link></div>
                         
               </div>
    )
  }



   const url = 'http://admin.lahcen-elhanchir.com/storage/';
  console.log(this.props.pizzas[0])
    return (


      <div>
   <Navbar/>

<Slide/>

        
<div className="bg-white pt-3">

<div className="top-content ">
  <div className="container-fluid">
    <div id="carousel-example" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner row w-100 mx-auto" role="listbox">


      {this.props.pizzas.map((item, idx) => (
        <div className="carousel-item col-12 col-sm-6 col-md-6 col-lg-3 active rounded shadow">
          <img
            src={url+item.image1}
            className="img-fluid mx-auto d-block"
            alt="img1"
          />
        </div>
            ))} 


      </div>
      <a
        className="carousel-control-prev"
        href="#carousel-example"
        role="button"
        data-slide="prev"
      >
 
   
      </a>
      <a
        className="carousel-control-next"
        href="#carousel-example"
        role="button"
        data-slide="next"
      >
      
    
      </a>
    </div>
  </div>
</div>

<div className="jumbotron jumbotron-fluid bg-white mb-0 mt-3">
        <div className="jumbotron-background">
          <img src="https://pixabay.com/get/54e7d3454e55ad14f6da8c7dda35367b1c36dfe65159794f_1280.jpg" className="w-100" />

        </div>
        <div className="container text-white">
        <h3 className="font mb-4">
Nous sommes #ToujoursLaPourVousLivrer
</h3>
        
          <hr className="my-4 text-white" />
          <p className=" text-white font h5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    

    {message}
        </div>
      </div>

    
 </div>

 
      
<Footer/>



      </div>
    )
  }
}

export default Homepage
