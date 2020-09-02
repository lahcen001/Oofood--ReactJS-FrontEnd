import React, { Component } from 'react'
import{Link , withRouter} from 'react-router-dom'

import logo  from '../img/logo.png'
import {getdashorder} from './Functions_dash';
import { AiOutlineLogout } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import '../css/aside.scss';
import '../css/style.css';
import '../css/card.css';
import '../css/font.css'
export class Aside_bar extends Component {
  constructor(props){
    super(props)
    this.state ={
        index:[]
    }
}




    
  componentDidMount(){

    getdashorder().then(res=>{
     this.setState({
     index:res
     })
     console.log(this.state.index)
  })

  }

getdata(){
  getdashorder().then(res=>{
    this.setState({
    index:res
    })
    console.log(this.state.index)
 })
}



componentDidUpdate(){
  this.getdata()
}


  
logOut(e){
  
  e.preventDefault()
  localStorage.removeItem('usertoken')
  localStorage.removeItem('role')
  this.props.data.history.push('/admin')

  
}
  render() {


    let num = 0;
    this.state.index.forEach(element => {
       
    
         num += parseFloat(element.cont.length);
     });

   
    console.log('data delete',num)
   
    let att = 0;
    const attente = this.state.index.filter(p => p.is_added==0 && p.accept==null)

    attente.forEach(element => {
       
      // element.is_added =0;
      att += parseFloat(element.cont.length);
  });


  let acc = 0;
  const accepted = this.state.index.filter(p => p.is_added==1);


  
  accepted.forEach(element => {
       
    // element.is_added =0;
    acc += parseFloat(element.cont.length);
});


let ann = 0;
const annule = this.state.index.filter(p =>  p.accept==1 && p.is_added==0 );

annule.forEach(element => {
       
  // element.is_added =0;
  ann += parseFloat(element.cont.length);
});

let conf = 0;
const confirmer=  this.state.index.filter(p => p.exp);

confirmer.forEach(element => {
       
  // element.is_added =0;
 conf += parseFloat(element.cont.length);
});
    ////////



    const loginRegLink = (
      <Link to="/admin" className="btn btn-outline-primary  btn-block">
      Login
         </Link>
  )

  const userLink = (
<div>
<li>
      
            </li>
            <li>
     <Link to="/orderdash" className="text-white">
  
   
  Liste des commandes  {num !=0 && <span className="badge badge-info">   {num}</span>} 
    </Link>
    </li>
    <li>
    <Link to="/ajoutdash" className="text-white">
      commandes acceptées     {acc !=0 && <span className="badge badge-info">{acc} </span> } 
  </Link>

  </li>

  <li>
  <Link to="/orderref" className="text-white">

   commandes en attentes {att !=0 && <span className="badge badge-info"> {att}</span> } 
  </Link>
  </li>
 <hr/>
  <li>
  <Link to="/annulerclient" className="text-white" >
 commande annulée {ann !=0 && <span className="badge badge-info"> {ann}</span> } 
  </Link>

  </li>
  <li>
  <Link  to="/confirmerecep" className="text-white" >
   commandes confirmées  {conf !=0 && <span className="badge badge-info"> {conf}</span> } 
  </Link>
  </li>


  </div>
 
  )
  

    return (
    
    //         <nav

    //     id="sidebarMenu"
    //     className="col-md-3 d-md-block  sidebar collapse"
    //   >
        
       
    //     <div className="sidebar-sticky ">
    //       <div className=" justify-content-center">
          
    //       <img className="w-75 ml-4"  src={logo} alt=""/>
         
    //    <h2 className="text-center ">  BestMenu</h2>
    // <h5 className="text-center">  bienvenue  {localStorage.name}</h5>
   
    //          </div>
    //       <ul className="nav flex-column">

         
    //         <li className="nav-item">
         
           
    //         {(localStorage.usertoken &&  localStorage.role==1) ? userLink : loginRegLink}
               
              
    //         </li>
            
    //       </ul>
    //       <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
           
    //         {/* <a
    //           className="d-flex align-items-center text-muted"
    //           href="#"
    //           aria-label="Add a new report"
    //         >
    //           <span data-feather="plus-circle" />
    //         </a> */}
    //       </h6>
       
    //     </div>
    //   </nav>
    <nav id="sidebar">
    <div class="sidebar-header texte-center">
    <img class="ml-5"  src={logo} width="100"  alt=""/>
        <h3 class=" text-center font ">BestMenu</h3>
    </div>

    <ul class=" text-center  list-unstyled components">
        <p>Admin Dashboard</p>
       
        { userLink }
    </ul>
    <ul class="list-unstyled CTAs">
                    <li><a onClick={this.logOut.bind(this)}  type="button"  className="download mt-2">
       <AiOutlineLogout/>  Logout
            </a></li>
                 
                </ul>

</nav>



    )
  }
}

export default   withRouter(Aside_bar)
