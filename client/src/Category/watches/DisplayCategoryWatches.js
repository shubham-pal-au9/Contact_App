import React from 'react'
import { Link } from 'react-router-dom';
import './displaycategorywatches.css';
const DisplayCategoryWatches = (props) => {

    const DeleteProduct =(ID) => {
        console.log(ID)
        fetch(`http://localhost:9700/deleteWatch/${ID}`,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            
        })
        
    }
    const listProducts = ({productdata}) => {
        console.log("Product Test>>>>",productdata._id)
        if(productdata){
            
            return productdata.map((item) => {
                
                return(
                    
                    <div>
                       

                        <div class="container">
                            <div class="row">
                                <div class="col">
                                 <div className="tileContainer">
                            
                            <div className="tileComponent2">
                                <div className="componentHeading text-right">
                                    Name:{item.name}
                                </div>
                            <div className="componentSubHeading text-center">
                                   OS: {item.os} TV <br/> <br/>
                                  
                                </div>
                                <div className="componentSubHeading text-center">
                                  Price: {item.price} <br/> <br/>
                                   

                                </div>
                        </div> <br/> <br/>
                      
                        
                       
                        </div>
                                </div>
                                <div class="col-2">
                                 <Link to={`/update-watches/${item._id}`}> <button className="btn btn-primary">Edit</button> </Link>
                        
                                </div>
                                <div class="col">
                               <button className="btn btn-danger" onClick={(ID) => DeleteProduct(item._id)}> Delete </button>
                                </div>

                                
                            </div>
                        </div>
                     
                   </div>
                )
            })
        }
    }

    return(
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">
                    List of Watch Products
                </p> 
                
                <Link to="/add-watches" className="btn btn-primary">Add Product</Link> <br/> <br/>
                <p className="quickSearchSubHeading">
                    Television
                </p>
                <br/>
                {listProducts(props)}
                <Link to="/" className="btn btn-success">Go Back</Link>
            </div>
            
          
        </div>
    )
}

export default DisplayCategoryWatches;
