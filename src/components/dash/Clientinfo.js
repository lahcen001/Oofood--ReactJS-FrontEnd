import React, { Component } from 'react'

import axios from 'axios';
import { Aside_bar } from './Aside_bar';
import { Link, Redirect } from 'react-router-dom';
import {getdashorder} from './Functions_dash';
import { RiDeleteBin5Line} from 'react-icons/ri';
import { AiOutlineUnorderedList } from 'react-icons/ai';
export class Clientinfo extends Component {
 

    constructor(props){
        super(props)
        this.state ={
            index:[],
            name:'',
            email:'',
            ville:'',
            adresse:'',
            phone:'',
            loading:false
        }
    }
   
    

    deleteOrder = (id)=>{

      axios.delete(`http://admin.lahcen-elhanchir.com/api/destroy/${id}`).then(res=>{
        
   })
   .catch(err=>{
       console.log(err)
   })


   
 getdashorder().then(res=>{
 
  this.setState({
  index:res
  })
  console.log(this.state.index)

  
})

   
getdashorder().then(res=>{
  this.setState({
  index:res
  })
  console.log(this.state.index)

  
})

    }




 

  

toggleCart = (item) => {

    
  if (item.is_added==1){

    fetch('http://admin.lahcen-elhanchir.com/api/removecat/' + item.id_order, {
      method: 'PUT',
      body: JSON.stringify(item),
      headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
  });

  

  getdashorder().then(res=>{
    this.setState({
    index:res
    })
    console.log(this.state.index)

    
 })


 getdashorder().then(res=>{
  this.setState({
  index:res
  })
  console.log(this.state.index)

  
})

 console.log(item.id)

  }
       
  else{

    
  fetch('http://admin.lahcen-elhanchir.com/api/addcat/' + item.id_order, {
     method: 'PUT',
      body: JSON.stringify(item),
      headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }

  
  });
  

  getdashorder().then(res=>{
    this.setState({
    index:res
    })
    console.log(this.state.index)
 })
 getdashorder().then(res=>{
  this.setState({
  index:res
  })
  console.log(this.state.index)
})

 console.log(item.id)

 
  }
  
}







    
    componentDidMount(){
   const id=  this.props.match.params.id;
   getdashorder().then(res=>{
    this.setState({
    index:res
    })
    console.log(this.state.index)
 })
        
   
        axios.get(`http://admin.lahcen-elhanchir.com/api/user/${id}`).then(res=>{
    
           
             this.setState({
             
      name:res.data.name,
     email:res.data.email,
     ville:res.data.ville,
     adresse:res.data.adresse,
     phone:res.data.phone,

        
     
         })
        })
        .catch(err=>{
            console.log(err)
        })
     
            
    
      }
  
    
  render() {

    const client= this.state.index.filter(p => p.id== this.props.match.params.id);



    return (

      

<>

{
            !(localStorage.usertoken &&  localStorage.role==1) ? (
              <Redirect to ="/admin"></Redirect>
            ) :(

<>

  <div class="wrapper">
    <Aside_bar data={this.props} />

  
<>
<div >

      </div>
      

     





      <>





     
      <div className="table bg-white rounded  p-3 m-3 shadow">

<table>


  
            <thead>
             
           
             
                <th>
                  <button type="button" id="sidebarCollapse" class="btn btn-info mr-1">
                        
                        <AiOutlineUnorderedList/>
            </button>
             Commande </th>
                <th>Quantité</th>
                <th>Prix</th>
                
                <th>date</th>
                <th>Image</th>
                <th>Statut</th>
               
                <th>Supprimer</th>
                
             
             
            
            </thead>
         
            <tbody>
            {(this.state.loading) && (
              
 
              <tr>
             
             
              <td colspan="9" class="text-center p-3 "> <div class="spinner-border text-success  " role="status">
                
              </div>
              </td>
              </tr>
              
              
              )}


{this.state.index.map((items,index) => (
              <tr key={index}>
             
            
                

                
             <td><strong>{items.order_name}</strong></td>
                <td><strong>{items.cont}</strong></td>
                <td><strong>{(items.price)*(items.cont)}  MAD</strong></td>
                <td><strong>{items.date}</strong> </td>
                <td className="">
			      <img src={'http://admin.lahcen-elhanchir.com/storage/'+items.imageURL} className="img-fluid img-thumbnail" alt="Sheep"  width="100" height="100"/>
		      </td>
               
                
                <td>
        
          {items.is_added==1 ? (
            <span class="badge badge-pill badge-success"> Accepté</span>         
                    ):(( items.accept==true  && items.is_added==0  ?
                      <span class="badge badge-pill badge-danger">Commande Annulé </span>:
                      <button type="button" onClick={() => this.toggleCart(items)}  className="btn btn-dark">  En attente</button> 
                    
                    )

 )}
       
          </td>
          
         
          <td>
                <button type="button" onClick={() => this.deleteOrder(items.id_order)}  className="btn btn-danger"><RiDeleteBin5Line/></button>
          </td>

              </tr>
           )) } 


            </tbody>
            
            </table>
           
          </div>




          
      <table className="table bg-white rounded shadow p-3 mr-5 mt-5  col-md-2">


<tr>

<td><h6 className="text-success">Nom et Prenom </h6></td>
<td><h6>{this.state.name}</h6></td>
</tr>
<tr>
<td><h6  className="text-success">Email </h6> </td>
<td><h6> {this.state.email}</h6> </td>
</tr>
<tr>
<td><h6  className="text-success">Telephone</h6> </td>
<td><h6> <span class="badge badge-warning"> {this.state.phone} </span></h6> </td>
</tr>
<tr>
<td><h6  className="text-success">Ville </h6> </td>
<td><h6> {this.state.ville}</h6> </td>
</tr>
<tr>
<td><h6  className="text-success">Adresse </h6> </td>
<td><h6> {this.state.adresse}</h6> </td>
</tr>
</table>
</>


   
   

 

</>
</div>


 </>
            )
          }

     </>

    )
  }
}

export default Clientinfo
