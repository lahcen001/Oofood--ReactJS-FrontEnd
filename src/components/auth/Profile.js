import React , {Component } from 'react';
import {getProfile} from './UserFunctions';
import axios from 'axios';
import Footer from '../Footer';
import Navbar from './Navbar';
import {update} from './UserFunctions';
import { Link } from 'react-router-dom';
import { Button,Modal } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';

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
        offset: 0,
        tableData: [],
        orgtableData: [],
        perPage: 4,
        currentPage: 0
        

    }
    this.onChange =  this.onChange.bind(this)
    this.onSubmit =  this.onSubmit.bind(this)

}


handlePageClick = (e) => {
  const selectedPage = e.selected;
  const offset = selectedPage * this.state.perPage;

  this.setState({
      currentPage: selectedPage,
      offset: offset
  }, () => {
      this.loadMoreData()
  });

};


loadMoreData() {
const data = this.state.orgtableData;

const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
this.setState({
  pageCount: Math.ceil(data.length / this.state.perPage),
  tableData:slice
})

}





handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
}
componentDidMount(){
  this.getData1();
}



acceptOrder = (itm)=>{
    console.log('accept',itm.id)
    axios.put(`http://admin.lahcen-elhanchir.com/api/accept/${itm.id}`)
 .then((res)=>{
   console.log(res)
 });




 ////////////////////////////////////////
 
 this.getData1();

}
deleteOrder = (id)=>{
    axios.delete(`http://admin.lahcen-elhanchir.com/api/destroy/${id}`).then(res=>{
 })
 .catch(err=>{
     console.log(err)
 })



 this.getData1();


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


getData1=()=> {
  
  var data;
  getProfile().then(res=>{
    console.log(this.state.id)

  axios.get(`http://admin.lahcen-elhanchir.com/api/getprofile/${res.id}`).then(res=>{
    
          
               data = res.data;
           
            console.log(this.state.data)
           this.setState({
             loading:true
           })
               
                
     // var data = res;
  
          var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
          

          this.setState({
              pageCount: Math.ceil(data.length / this.state.perPage),
              orgtableData :res.data,
              tableData:slice,
              loading:true
       
      });
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




{this.state.tableData.map((itm,index) => (



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



{(this.state.loading) && (
  <ReactPaginate
  className="mr-2"
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={4}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}/>

    )}
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