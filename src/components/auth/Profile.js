import React , {Component } from 'react';
import {getProfile} from './UserFunctions';
import axios from 'axios';
import Footer from '../Footer';
import Navbar from './Navbar';
import {update} from './UserFunctions';
import { Link } from 'react-router-dom';
import { Button,Modal } from 'react-bootstrap'

class Profile extends Component {

constructor(props){
    super(props)
    this.state ={
        name:'',
        email:'',
        ville:'',
        phone:'',
        adresse:'',
        alert:'',
        id:5,
        data:[],
        showHide : false,
        loading:false,
        

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
            console.log(this.state.data)
           this.setState({
             loading:true
           })
                })
                .catch(err=>{
                    console.log(err)
                })
            



   this.setState({
   id:res.id,     
   name:res.name,
   email:res.email,
   ville:res.ville,
adresse:res.adresse,
phone:res.phone,

   })

    })
    

}



acceptOrder = (itm)=>{
    console.log('accept',itm.id)
    axios.put(`http://admin.lahcen-elhanchir.com/api/accept/${itm.id}`)
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
email:res.email,
ville:res.ville,
adresse:res.adresse,
phone:res.phone,

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
email:res.email,
ville:res.ville,
adresse:res.adresse,
phone:res.phone,


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
password:this.state.password, 
phone:this.state.phone,
adresse:this.state.adresse,
ville:this.state.ville,


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

    let tot = 0;
    
    const ajout = this.state.data.filter(p => p.is_added==1);
    ajout.forEach(element => {
      
        // element.is_added =0;
        tot += parseFloat(element.price);
    });
console.log("hi",this.props.pizzas)

return (

<div>
 <Navbar pizzas={this.props.pizzas}/>

{/* <Slide/> */}



  <div className="mx-4">
      <div className="jumbotron mt-5">




<div className="row justify-content-center">
<div className=" mb-5">
<h2 className="mb-1">List de Mes Commandes</h2>

<Button variant="secondary" className="btn  btn-dark mx-2" onClick={() => this.handleModalShowHide()}>
                 Modifier mes coordonnees
                </Button>
                <Link to="/profile1" className="btn  btn-secondary  ">
                      commandes Expédiées
                    </Link>
                    </div>

<div>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Modifier le Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        

                    <form className="form-signin" noValidate onSubmit={this.onSubmit} mx-auto>
                    {this.state.alert==404 ? (

<div class="alert alert-success" role="alert">
  Email and Password are changed
</div>
):(
<div >
 
</div>
)
}
 <label htmlFor="inputEmail" className="sr-only">
   Name
  </label>
  <input
    type="text"
   name="name"
    className="form-control my-3"
    placeholder="Name"
    value={this.state.name}
    onChange={this.onChange}
    required
    autofocus
  />
 
  <label htmlFor="inputEmail" className="sr-only">
    Email address
  </label>
  <input
    type="email"
   name="email"
    className="form-control my-3"
    placeholder="Email address"
    value={this.state.email}
    onChange={this.onChange}
    required
    autofocus
  />
  <label htmlFor="inputText" className="sr-only">
    Password
  </label>
  <input
    type="password"
    name="password"
    className="form-control my-2"
    value={this.state.password}
    onChange={this.onChange}
    placeholder="Password"
    required
  />
  <label htmlFor="inputText" className="sr-only">
  Telephone
  </label>
  <input
    type="text"
    name="phone"
    className="form-control my-2"
    value={this.state.phone}
    onChange={this.onChange}
    placeholder="telephone"
    required
  />
  <label htmlFor="inputText" className="sr-only">
  Ville
  </label>
  <input
    type="text"
    name="ville"
    className="form-control my-2"
    value={this.state.ville}
    onChange={this.onChange}
    placeholder="ville"
    required
  />
   <label htmlFor="inputText" className="sr-only">
  Telephone
  </label>
  <textarea
    type="text"
    name="adresse"
    className="form-control my-2"
    value={this.state.adresse}
    onChange={this.onChange}
    placeholder="Adresse"
    required
  />

  <button className="btn btn-lg btn-primary btn-block my-2" type="submit">
  Modifier
  </button>
 
 

</form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Close
                    </Button>
                    
                    </Modal.Footer>
                </Modal>

            </div>
        
</div>
<div >
<div className="row justify-content-center ">
{/* <table className="table col-lg-3  col-md-12 col-sm-12  shadow mx-1 bg-white rounded">
    
<tbody>

<tr className="bg-blue">
<td><h5 className="text-success">Name</h5></td>
<td><h5>{this.state.name}</h5></td>
</tr>
<tr>
<td><h5 className="text-success">Email</h5></td>
<td><h5>{this.state.email}</h5></td>
</tr>
<tr>
<td><h5 className="text-success">Telephone </h5></td>
<td><h5>{this.state.phone}</h5></td>
</tr>
<tr>
<td><h5 className="text-success">Adresse </h5></td>
<td><h5>{this.state.adresse}</h5></td>
</tr>
<tr>
<td><h5 className="text-success">Ville </h5></td>
<td><h5>{this.state.ville}</h5></td>
</tr>

<tr>
<td><h5 className="text-success">total</h5></td>
<td><h5>{tot} MAD</h5></td>
</tr>

  
</tbody>






</table> */}





<table className="table col-lg-10  col-md-12 col-sm-12 shadow  mx-1 bg-white rounded p-3">


<thead>
<tr>
<th>Command Name</th>
<th>prix</th>
<th>Quantité</th>
<th>Image</th>
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




{this.state.data.map((itm,index) => (



            <tr key={index}>
                 <td>{itm.order_name}</td>

                 <td>{(itm.price)*(itm.cont)} dh</td>
                 <td>{itm.cont} </td>
                
                 <td className="w-25">
			      <img src={'http://admin.lahcen-elhanchir.com/storage/'+itm.imageURL} class="img-fluid img-thumbnail" alt="Sheep" width="100" height="100"/>


          



		      </td>




                 <td> {itm.is_added==1 ? (
                 <span class="badge badge-pill badge-success">commande expédiée</span>
                    ):((itm.accept==1 && itm.is_added==0 ?
                   <span class="badge badge-pill badge-primary">  Commande annulée</span> :
                   <button type="button" onClick={() => this.acceptOrder(itm)}  className="btn btn-dark"> Annuler </button>
                   ))
                    
                    
                    }
                    
                   

                    
                    </td>
 

 </tr>
   )) } 

  

</tbody>




</table>
</div>
</div>
</div>
</div>
<Footer/>

</div>

)


}


}


export default Profile