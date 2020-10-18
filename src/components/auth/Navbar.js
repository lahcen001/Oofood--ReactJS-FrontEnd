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
      acc += 1;
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
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      <h5 className="text-white"><RiLoginCircleLine/> Connexion</h5> 
                    </Link>
                    
                    
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                       <h5 className="text-white" ><FaRegistered/> Inscription</h5>
                    </Link>
                    
                </li>
                
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                     <h5 className="text-white"  > <AiFillDashboard/>Mes Commandes</h5> 
                    </Link>
                    
                </li>

                <li className="nav-item ">
                    <a href="/" onClick={this.logOut.bind(this)}   className="nav-link">
                   <h5 className="text-white"  ><AiOutlineLogout/> Logout</h5>
                    </a>
                    
                </li>
              
            </ul>
        )



        const loginRegLink1 = (
    
              
        <Link to='/login'><div className="btn btn-secondary btn-lg btn-block  shadow" type="button"><TiShoppingCart/>   {acc}</div></Link>
                          
                    )
                   let userLink1

         if(acc== 0){
                    userLink1 = (
                        
          <Link to='/paniervide'><div className="btn btn-secondary btn-lg btn-block  shadow" type="button"><TiShoppingCart/> {acc} </div></Link>
                           
                    )
                }
                else {
               userLink1 = (
                        
                        <Link to='/cart'><div className="btn btn-secondary btn-lg btn-block  shadow" type="button"><TiShoppingCart/> {acc} </div></Link>
                                         
                                  )
                }


    return (




        <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm ">
         

         <div class="container">
    <a href="#" class="navbar-brand">
    
      <img src={logo} width="70"  alt=""/>
 
      <span class=" mb-1 text-white text-bold font h2"> Oofood</span>
    </a>

    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-lg-end">
       

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







    )

    }
}
  
export default withRouter(Navbar)