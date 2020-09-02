import React , {Component} from 'react'
import{Link , withRouter} from 'react-router-dom'
import logo  from '../img/logo.png'
import { AiOutlineHome, AiFillDashboard } from 'react-icons/ai';
import { GiFoodTruck } from 'react-icons/gi';
import { RiLoginCircleLine } from 'react-icons/ri';
import { FaRegistered } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';
import '../css/font.css'





class Navbar extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

lingth(){
    if(this.props.pizzas){
    var acc = 0;
    const accepted = this.props.pizzas.filter(p => p.is_added==1);
  
  
    
    accepted.forEach(element => {
         
      // element.is_added =0;
      acc += parseFloat(element.cont.length);
  });

  return acc;
}
else{
    return 0;
}

}


componentDidMount(){
  this.lingth()
}
componentDidUpdate(){
    this.lingth()
}
   


    render(){

    let acc = this.lingth()

        const loginRegLink = (
            <ul className="navbar-nav mx-2">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      <h5 className="text-white"><RiLoginCircleLine/> Login</h5> 
                    </Link>
                    
                    
                </li>
                <li className="nav-item mx-2">
                    <Link to="/register" className="nav-link">
                       <h5 className="text-white" ><FaRegistered/> Register</h5>
                    </Link>
                    
                </li>
                
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav mx-2">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                     <h5 className="text-white"  > <AiFillDashboard/>  Dashboard</h5> 
                    </Link>
                    
                </li>

                <li className="nav-item mx-2">
                    <a href="/" onClick={this.logOut.bind(this)}   className="nav-link">
                   <h5 className="text-white"  ><AiOutlineLogout/> Logout</h5>
                    </a>
                    
                </li>
              
            </ul>
        )



        const loginRegLink1 = (
    
              
        <Link to='/login'><div className="btn btn-secondary btn-lg btn-block my-2 shadow" type="button"><TiShoppingCart/>   {acc}</div></Link>
                          
                    )
                   let userLink1

         if(acc== 0){
                    userLink1 = (
                        
          <Link to='/paniervide'><div className="btn btn-secondary btn-lg btn-block my-2 shadow" type="button"><TiShoppingCart/> {acc} </div></Link>
                           
                    )
                }
                else {
               userLink1 = (
                        
                        <Link to='/cart'><div className="btn btn-secondary btn-lg btn-block my-2 shadow" type="button"><TiShoppingCart/> {acc} </div></Link>
                                         
                                  )
                }


    return (




        <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm ">
         

         <div class="container">
    <a href="#" class="navbar-brand">
    
      <img src={logo} width="70"  alt=""/>
 
      <span class=" mb-1 text-white text-bold font h2"> BestMenu</span>
    </a>

    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-lg-end">
        {/* <a className="navbar-brand" href="#">Beta Fast Food</a>
        <img src={logo} alt=""/>
        
        <h4 className="text-white font-weight-bold">  BestMenu</h4>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse justify-content-md-center" id="navbarColor01"> */}

        <ul className="navbar-nav ">
    <li className="nav-item">
        <Link to="/" className="nav-link ">
        <h5  className="text-white"> <AiOutlineHome/> Accueil</h5>
        </Link>
    </li>
    
</ul>
<ul className="navbar-nav">
    <li className="nav-item">
        <Link to="/commander" className="nav-link">
           <h5 className="text-white"><GiFoodTruck/> Commander</h5> 
        </Link>
    </li>
    
</ul>



{(localStorage.usertoken &&  localStorage.role==2) ? userLink : loginRegLink}


{localStorage.usertoken ? userLink1 : loginRegLink1}
<form class="form-inline my-2 my-lg-0">
   
  
    </form>
  </div>
  </div>
</nav>



// <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
//   <div class="container">
//     <a href="#" class="navbar-brand">
    
//       <img src="https://res.cloudinary.com/mhmd/image/upload/v1557368579/logo_iqjuay.png" width="45" alt="" class="d-inline-block align-middle mr-2"/>
 
//       <span class="text-uppercase font-weight-bold">Company</span>
//     </a>

//     <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

//     <div id="navbarSupportedContent" class="collapse navbar-collapse">
//       <ul class="navbar-nav ml-auto">
//         <li class="nav-item active"><a href="#" class="nav-link">Home <span class="sr-only">(current)</span></a></li>
//         <li class="nav-item"><a href="#" class="nav-link">About</a></li>
//         <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
//         <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
//       </ul>
//     </div>
//   </div>
// </nav>





    )

    }
}
  
export default withRouter(Navbar)