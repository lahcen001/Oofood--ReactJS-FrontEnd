

import React, { Component } from 'react';
import {getdashorder} from './Functions_dash';
import{Link , withRouter, Redirect} from 'react-router-dom';
import axios from 'axios';
import { Aside_bar } from './Aside_bar';
import { RiDeleteBin5Line} from 'react-icons/ri';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import ReactPaginate from 'react-paginate';




export class Annuler_client extends Component {
    constructor(props){
        super(props)
        this.state ={
          index:[],
          loading:false,
          offset: 0,
          tableData: [],
          orgtableData: [],
          perPage: 5,
          currentPage: 0
        }
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




    deleteOrder = (id)=>{

      axios.delete(`http://admin.lahcen-elhanchir.com/api/destroy/${id}`).then(res=>{
    
         
   })
   .catch(err=>{
       console.log(err)
   })

   this.getData1();


    }



    
  componentDidMount(){
    

    this.getData1();
   
   
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

  
  this.getData1();

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
  

  this.getData1();


 console.log(item.id)

 
  }
  
}



// componentDidUpdate(prevState){
//   if (this.state.index !== prevState.index) {
//   this.getData1();
//   }
// }




getData1=()=> {
  
  getdashorder().then(res=>{
          var data = res.filter(p =>  p.accept==1 && p.is_added==0 );;
  
          var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
          

          this.setState({
              pageCount: Math.ceil(data.length / this.state.perPage),
              orgtableData :res,
              tableData:slice,
              loading:true
       
      });
    });
}




    render() {
     
     

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
<div class="">

      </div>
      

      <div className="table bg-white rounded shadow p-3 m-5 ">
      <h4 className="text-center m-2"><a type="button" id="sidebarCollapse" class=" mr-2">
                        
                        <AiOutlineUnorderedList/>
      </a>Commandes Annulée</h4>
<table className="text-center mt-2 rounded">
            <thead>
              <tr>
           
                <th>Client</th>
                <th>Commande </th>
                <th>Quantité</th>
                <th>Prix</th>
                
                <th>date</th>
                <th>Image</th>
                <th>Statut</th>
            
                <th>Supprimer</th>
                
             
             
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

             
            {this.state.tableData.map((items,index) => (
              <tr key={index}>
             
            
                <td>
                <Link className=" mb-1 rounded"  to={'/client/'+items.id} >
                  {items.name}
                  </Link>
                  </td>

                  <td><strong>{items.order_name}</strong></td>
                <td><strong>{items.cont}</strong></td>
                <td><strong>{(items.price)*(items.cont)}  MAD</strong></td>
                <td><strong>{items.date}</strong> </td>
                <td className="">
			      <img src={'http://admin.lahcen-elhanchir.com/storage/'+items.imageURL} className="img-fluid img-thumbnail" alt="Sheep"  width="100" height="100"/>
		      </td>
               
                
            
          
          <td> {items.accept==true ? (
                 <span class="badge badge-pill badge-success">Commande annulé <br/> par le client</span>
                    ):(
      
                 <span class="badge badge-pill badge-primary"></span>   
                    )
                    
                    
                    }
                    
                    
                    
                    </td>
          <td>
          <button type="button" onClick={() => this.deleteOrder(items.id_order)}  className="btn btn-danger"><RiDeleteBin5Line/></button>
          </td>

              </tr>
           )) }  

            </tbody>
            
             
            </table>


            {(this.state.loading) && (
              
 
              <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}/>
              
              )}
          </div>

 
       

</>
</div>


 </>
            )
          }

     </>
        )
    }
}

export default Annuler_client
