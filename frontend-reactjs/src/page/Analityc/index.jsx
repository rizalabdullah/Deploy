import Navigasi from "../../Navigasi";
import gambar from "../Home/img/3dolphin.jpg";
import user from "../Home/img/user.png";
import $ from "jquery";
import td from "datatables.net";
import { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  import { Doughnut } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );

 export const data3 = {
    labels: [
      'Conclusion no judge',
      'Not justified',
      'Justified',
      'Not to be judge'
    ],
    datasets : [{
      label: 'My First Dataset',
      data: [300, 50, 100, 50,200],
      backgroundColor: [
        'rgb(155, 100, 132)',
        'rgb(54, 162, 235)',
        'rgb(100, 205, 200)',
        'rgb(100, 255, 0)',
        'rgb(200, 205, 80)'
      ],
      hoverOffset: 4
    }]
   }
  
  export const data4 = {
    labels: [
      'Tangerang',
      'Tirta Prima Indonesia',
      'Sanpan Agung'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(0, 100, 132)',
        'rgb(54, 162, 235)',
        'rgb(100, 205, 200)'
      ],
      hoverOffset: 4
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

export const data1 = {
    labels: ["bintang 0.0%", "Bintang Criystal", "Bintang Pilsener", "Bintang Raddler", "Green Sands", "Heineken"],
    datasets: [{
        label: 'My Data Set',
        data: [12, 19, 3, 23, 9, 3],
        backgroundColor: [
        'rgb(153, 102, 255)',
        'rgb(153, 102, 255 )',
        'rgb(153, 102, 255)',
        'rgb(153, 102, 255 )',
        'rgb(153, 102, 255 )',
        'rgb(153, 102, 255 )'
        ],
    }]
};


export const data2 = {
    labels: ["Nadia Ishma","Agung Hadi Kusuma","Shapira Bella"],
    datasets: [{
      label: 'Ticked Open',
      backgroundColor: "red",
      data: [12, 59, 5, 56, 58,12, 59, 87, 45],
    }, {
      label: 'Ticked Close',
      backgroundColor: "blue",
      data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
    }],
  };

export const options1 = {
  responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
}

const Analityc = () => {
  const auth = useSelector(state => state.auth)

    useEffect(()=>{
        $(document).ready(function () {
          $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $('.title').toggleClass('active');
            $('.img').toggleClass('active');
          });
          $('#table').DataTable();
      });

    });	
        
      
    return(
        <div>
            <div className="wrapper" >
       
       <Navigasi />
      
       <div id="content">

           <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="container-fluid">
                   <img src={gambar} className="img" style={{width: "40px",height: "40px", borderRadius: "50%"}} />
                       <div className="title">
                           <h5 style={{margin: "0",padding: "0",lineHeight: "15px",marginLeft: "5px" }} >3DOLPHINS
                           </h5>  
                           <span style={{fontSize: "13px",marginLeft: "5px" }}>version 5.2x</span>
                       </div>
                   <button type="button" id="sidebarCollapse" className="btn btn-info " style={{marginLeft: "10px" }}>
                       <i className="fas fa-align-left"></i>
                       {/* <div classNameName="panah-kiri"></div>
                       <div classNameName="panah-kanan"></div> */}
                   </button>
                   <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       <i className="fas fa-align-justify"></i>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="nav navbar-nav ml-auto">
                         <form className="form-inline">
                           <input className="form-control mr-sm-2 fa fa-search search" type="search" placeholder="&#xF002; Search" aria-label="Search" />
                         </form>
                           <li className="nav-item active">
                               <a className="nav-link" href="#">
                                   <i className="fa fa-md fa-bell "></i>
                               </a>
                           </li>

               <li className="nav-item active dropdown">
                   <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                   style={{marginRight: "50px" }}>
                    <i className="fa fa-md fa-cog "></i>
                   </a>
                   <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                     <a className="dropdown-item" href="#">Profile</a>
                      <Link class="dropdown-item" to="/logout">Logout</Link>
                   </div>
             </li>          
                            <li class="nav-item">
                                <a class="nav-link" > {auth.user.full_name} </a>
                            </li>
                           <li className="nav-item">
                           <img src={user} class="img" style={{width: "40px",height: "40px", borderRadius: "50%"}} />
                           </li>
                       </ul>

                   </div>
               </div>
           </nav>

                {/* end navbar */}
            
                <div className="container-fluid bg-light border border-2 mb-2" style={{fontWeight: "bold",padding: "15px 20px"}}>Complaint Report
            </div>

            <div className="container bg-light border border-2" >
                <div className="row" >
                  <div className="col col-md-6 " ><h4 style={{marginTop: "10px"}}>Complaint Report</h4>
                  </div>
                  <div className="col col-md-6 text-right" >
                    <div style={{marginTop: "10px"}}>
                      <button className="btn btn-primary" style={{fontSize: "10px"}}>Download Report</button>
                    </div>
                  </div>
                </div>

                <div className="row p-3 g-3" style={{display: "flex",justifyContent: "center",}}>
                  <div className="col col-md-5 border border-2 bg-white" style={{height: "380px", width: "500px",}}>
                      <div className="row m-0 p-0">
                        <div className="col col-md-6  m-0 p-0 " >
                                <h5 style={{marginTop: "10px"}}>Complaint by Plant</h5>
                        </div> 
                        <div className="col col-md-6 bg-white text-right " >
                                 <button className="btn" style={{marginTop: "10px"}} type="submit"> <i className="fa fa-md fa-download "></i> </button>
                                </div>
                      </div>

                             {/* chart doughnut  */}
                            <div style={{width: "100%",height: "300px"}}>
                            <Doughnut options={options} data={data4}/>  
                             {/* <canvas id="chartDoughnut"></canvas> */}

                            
                            </div>

                   </div>

                  <div className="col col-md-5 border border-2 bg-white " style={{height: "380px", marginLeft: "10px", width: "500px"}}>
                      <div className="row m-0 p-0">
                        <div className="col col-md-8  m-0 p-0 ">
                                <h5 style={{marginTop: "10px"}}>Complaint by Conclusion</h5>
                        </div> 
                        <div className="col col-md-4 bg-white text-right " >
                                <button className="btn" style={{marginTop: "10px"}} type="submit"> <i className="fa fa-md fa-download "></i> </button>
                                </div>
                      </div>
                             {/* chart doughnut1  */}
                            <div style={{width: "100%", height: "300px"}}>
                            <Doughnut options={options} data={data3}/> 
                            </div>
                   </div>
                </div>

                 <div className="row p-0">
                  <div className="col col-md-11 border border-2 bg-white" style={{eight: "380px", margin: "0 auto"}}>
                      <div className="row m-0 p-0">
                        <div className="col col-md-6  m-0 p-0 " >
                                <h5 style={{marginTop: "10px"}}>Complaint by Produk</h5>
                        </div> 
                               <div className="col col-md-6 bg-light text-right ">
                                 <select className="bg-light" style={{marginTop: "10px", width: "120px"}}>
                                     <option value="January">Januari</option>
                                     <option value="January">Febuari</option>
                                     <option value="January">Maret</option>
                                     <option value="January">April</option>
                                     <option value="January">Mei</option>
                                     <option value="January">Juni</option>
                                     <option value="January">Juli</option>
                                     <option value="January">Agustus</option>
                                     <option value="January">September</option>
                                     <option value="January">Oktober</option>
                                     <option value="January">November</option>
                                     <option value="January">Desember</option>
                                 </select>
                                 <button className="btn" style={{marginTop: "10px"}} type="submit"> <i className="fa fa-md fa-download "></i> </button>
                               </div>
                      </div>

                             {/* chart grafik  */}
                            <div style={{width: "100%",height: "300px"}}>
                             <Bar options={options} data={data1}/> 
                            </div>
                       
                    </div>   
                </div>

         <div className="row pt-3">
                  <div className="col col-md-11 border border-2 bg-white" style={{height: "420px", margin: "0 auto"}}>
                      <div className="row m-0 p-0">
                        <div className="col col-md-10  m-0 p-0 " >
                                <h5 style={{marginTop: "10px"}}>Complaint by Status and Investigator</h5>
                        </div> 
                        <div className="col col-md-2 bg-white text-right " >
                                 <button className="btn" style={{marginTop: "10px"}} type="submit"> <i className="fa fa-md fa-download "></i> </button>
                                </div>
                      </div>

                             {/* chart doughnut  */}
                            <div style={{width: "100%", height: "330px"}}>
                             <Bar options={options1} data={data2}/> 
                            </div>

                   </div>
        </div>
                 {/* Table  */}
        <div className="row pt-3">
                  <div className="col col-md-11 border border-2 bg-white" style={{minHeight: "300px" ,margin: "0 auto" }}>
                      <div className="row m-0 p-0">
                        <div className="col col-md-10  m-0 p-0 " >
                                <h5 style={{marginTop: "10px"}}>Complaint History</h5>
                        </div> 
                        <div className="col col-md-2 bg-white text-right " >
                                 <button className="btn" style={{marginTop: "10px"}} type="submit"> <i className="fa fa-md fa-download "></i> </button>
                                </div>
                      </div>
                            <div className="table-responsive">
                              <table className="table table-striped table-bordered " id="table">
                                <thead>
                                    <tr>
                                        <th>Issue Investigator</th>
                                        <th>Category</th>
                                        <th>Sub Category</th>
                                        <th>Brand</th>
                                        <th>Packaing Type</th>
                                        <th>Source</th>
                                        <th>Average Days(TBC)</th>
                                        <th>Conclusion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Nadia Irma</td>
                                        <td>Product</td>
                                        <td>TBC</td>
                                        <td>Bintang</td>
                                        <td>Can Jumbo</td>
                                        <td>Distributor</td>
                                        <td>30:26:30</td>
                                        <td>Conclusion No Judge</td>
                                    </tr>
                                </tbody>
                            </table>  
                          </div>
                            
                    </div>
              </div>
            </div>
                       
       </div>
     </div>

  </div>
    )
}

export default Analityc;