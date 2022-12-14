import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from 'react';
import axios from "axios";
import Navigasi from "../../Navigasi";
import $ from "jquery";
import gambar from "./img/3dolphin.jpg";
import user from "./img/user.png";
import { useSelector } from 'react-redux';

const Home = () => {
  const auth = useSelector(state => state.auth)

    const [product, setProduct] = useState([]);
  
  useEffect(()=>{
    $(document).ready(function () {
      document.querySelector('#sidebarCollapse').addEventListener('click', function () {
          $('#sidebar').toggleClass('active');
          $('.title').toggleClass('active');
          $('.img').toggleClass('active');
          $('.panah-kiri').toggleClass('active');
      });
});	

       getProduct();

  }, [] );

  const getProduct = async () => {
    const response = await axios.get(`/api/product`);
    setProduct(response.data);
    console.log(response);
  }

  const deleteProducts = async (id) => {
   await axios.delete(`/api/product/${id}`);
    getProduct();
    
  }
    return (
        <div>
            {/* <Link to="/tambah" className="btn btn-primary">Tambah Produk</Link>
            <Link to="/logout" className="btn btn-primary">Logout</Link>
            <div className="nam alert-warning">
            bb
            <center>
            <table className="table table-dark" style={{width:"500px"}}>
            <thead>
          <tr >
            <th>ID</th>
            <th style={{marginLleft:"50px"}}>Name</th>
            <th className="text-right">Price</th>
            <th className="text-right">Stock</th>
            <th className="text-right">Image</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
        {  product.map( (products, index)  => {
      return(        
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{products.name}</td>
            <td className="text-right">{products.price}</td>
            <td className="text-right">{products.stock}</td>
            <td className="text-right"><img src={products.image_url} alt="" style={{width:`80px`, height:`80px`}}></img></td>
            <td><Link to={`/detail/${products._id}`}>edit</Link>
            <Link to={`/edit/${products._id}`} className="btn btn-sm btn-warning">Edit</Link>
            
            <button className="btn btn-sm btn-danger"  onClick={ ()=> {
                const notif = window.confirm("Apakah anda ingin menghapus?");
                  if(notif === true){
                    deleteProducts(products._id)
                  }
                }  } 
              >Delete</button>
            </td>

        </tr> 
       

           ) 
                    }) 
           
        }
        </tbody>
            </table> 

            </center>  
            </div>
            <button type="button" className="btn btn-primary">Primary</button> */}
       
            <div class="wrapper" >
       
        <Navigasi />

       
        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img src={gambar} class="img" style={{width: "40px",height: "40px", borderRadius: "50%"}} />
                        <div class="title">
                            <h5 style={{margin: "0",padding: "0",lineHeight: "15px",marginLeft: "5px" }} >3DOLPHINS
                            </h5>  
                            <span style={{fontSize: "13px",marginLeft: "5px" }}>version 5.2x</span>
                        </div>
                    <button type="button" id="sidebarCollapse" class="btn btn-info " style={{marginLeft: "10px" }}>
                        <i class="fas fa-align-left"></i>
                        {/* <div className="panah-kiri"></div>
                        <div className="panah-kanan"></div> */}
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                          <form class="form-inline">
                            <input class="form-control mr-sm-2 fa fa-search search" type="search" placeholder="&#xF002; Search" aria-label="Search" />
                          </form>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    <i class="fa fa-md fa-bell "></i>
                                </a>
                            </li>

                <li class="nav-item active dropdown">
                    <a class="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                    style={{marginRight: "50px" }}>
                     <i class="fa fa-md fa-cog "></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="#">Profile</a>
                      <Link class="dropdown-item" to="/logout">Logout</Link>
                    </div>
              </li>         
                            <li class="nav-item">
                                <a class="nav-link" > {auth.user.full_name} </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" >
                                <img src={user} class="img" style={{width: "40px",height: "40px", borderRadius: "50%"}} />
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div class="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div class="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div class="line"></div>

            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      
    </div>
    )
}

export default Home;