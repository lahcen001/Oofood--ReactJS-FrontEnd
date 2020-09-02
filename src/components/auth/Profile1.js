import React , {Component } from 'react';
import {getProfile} from './UserFunctions';
import axios from 'axios';
import Footer from '../Footer';
import Navbar from './Navbar';
import {update} from './UserFunctions';

class Profile1 extends Component {

constructor(props){
    super(props)
    this.state ={
        name:'',
        email:'',
        alert:'',
        id:5,
        data:[],
        showHide : false

    }
    this.onChange =  this.onChange.bind(this)
    this.onSubmit =  this.onSubmit.bind(this)

}

handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
}
componentDidMount(){
    getProfile().then(res=>{
       console.log(this.state.id)


        axios.get(`http://admin.lahcen-elhanchir.com/api/getprofile/${res.id}`).then(res=>{
    
            this.setState({
                   data:res.data
            })

            this.setState({
              loading:true
            })
            console.log(this.state.data)
               })
                .catch(err=>{
                    console.log(err)
            })
            



   this.setState({

   id:res.id,     
   name:res.name,
   email:res.email
   
   })

    })
    

}



exp = (itm)=>{
    console.log('accept',itm.id)
    axios.put(`http://admin.lahcen-elhanchir.com/api/exp/${itm.id}`)
 .then((res)=>{
   console.log(res)
 });




 ////////////////////////////////////////
 
 getProfile().then(res=>{
    console.log(this.state.id)


     axios.get(`http://admin.lahcen-elhanchir.com/api/getprofile/${res.id}`).then(res=>{
 
         this.setState({
                data:res.data
         })
         console.log(this.state.data)
             })
             .catch(err=>{
                 console.log(err)
             })
         



this.setState({
id:res.id,     
name:res.name,
email:res.email


})

 })
 ///////


}
 


deleteOrder = (id)=>{
    axios.delete(`http://admin.lahcen-elhanchir.com/api/destroy/${id}`).then(res=>{
 })
 .catch(err=>{
     console.log(err)
 })



 
 getProfile().then(res=>{
    console.log(this.state.id)


     axios.get(`http://admin.lahcen-elhanchir.com/api/getprofile/${res.id}`).then(res=>{
 
         this.setState({
                data:res.data
         })
         console.log(this.state.data)
             })
             .catch(err=>{
                 console.log(err)
             })
         



this.setState({
id:res.id,     
name:res.name,
email:res.email


})

 })


  }
///////////
  onChange(e){
    this.setState({
        [e.target.name]:e.target.value

    })
    console.log(e.target.value)
}

onSubmit(e){
e.preventDefault();
const userp ={
name :this.state.name,
email :this.state.email,
password:this.state.password  

}
console.log(userp)
update(userp).then(res=>{
console.log('hiii ', res.status)
if(res.status == 404){
this.setState({
  alert:404
})
}else{
  this.setState({
    alert:500
  })
}
})



}
///////////



render(){
  const exp = this.state.data.filter(p => p.is_added==1);
  let tot = 0;
   this.state.data.forEach(element => {
      
        // element.is_added =0;
        tot += parseFloat(element.price);
    });


return (

<div>
<Navbar pizzas={this.props.pizzas} />

{/* <Slide/> */}



  <div className="mx-5">
      <div className="jumbotron mt-5 w-100  mt-5">




<div className="row justify-content-center">
<h2 className="mb-5 ">Commandes Expédiées</h2>


    <div>

              

   </div>
        
</div>
<div className="row justify-content-center">



<table className="table col-md-10 shadow mx-5 bg-white rounded">


<thead>
<tr>
<th>Command Name</th>
<th>prix</th>
<th>Qunatité</th>
<th>Image</th>
{/* <td>Commande</td> */}
<th>Statut</th>

</tr>
</thead>
<tbody>
    
{!(this.state.loading) && (
 
 <tr>


 <td colspan="8 " class="text-center p-3 "> <div class="spinner-border text-success  " role="status">
   
 </div>
 </td>
 </tr>
 
 
 )}



{exp.map((itm,index) => (
            <tr key={index}>
                 <td>{itm.order_name}</td>
                 <td>{(itm.price)*(itm.cont)} dh</td>
                 <td>{itm.cont}</td>
                 <td className="w-25">
			      <img src={'http://admin.lahcen-elhanchir.com/storage/'+itm.imageURL} class="img-fluid img-thumbnail" alt="Sheep" width="100" height="100"/>
		      </td>




                 {/* <td> {itm.is_added==1 ? (
                 <span class="badge badge-pill badge-success">commande expédiée</span>
                    ):(( itm.exp==true && itm.is_added==1 ?
                      <span class="badge badge-pill badge-primary">Commande Confirmée</span> :

                      <span class="badge badge-pill badge-primary">Commande en attente</span> 
                      ))
                    
                    
                    }
                    
                    
                    
                    </td> */}
 <td>
               
          {itm.exp==true? (
        

        <span class="badge badge-pill badge-primary">Commande Confirmée</span>   
      
                  
                    ):(
                   
         <button type="button" onClick={() => this.exp(itm)}  className="btn btn-dark">confirmer la réception  </button>
                    )}

                    
        
          </td>

{/* <td>
                <button type="button" onClick={() => this.deleteOrder(itm.id)}  className="btn btn-sm btn-outline-secondary">delete</button>
          </td> */}
                </tr>
   )) } 
  

</tbody>




</table>
</div>
</div>
</div>
<Footer/>

</div>

)


}


}


export default Profile1