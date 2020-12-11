import React, { Component } from "react";

export class Features extends Component {
  render() {
    return (
      <div id="bestsellers" className="text-center">
        <div className="container">
          <div className="section-title" style={{paddingTop: "5em", paddingBottom: "5em"}}>
            <h2>Bestsellers</h2>
           
          </div>
          <div className="row">
            <div className="bestseller-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="bestseller-item">
                  <div className="hover-bg">
                    {" "}
                    
                    <a
                      href="img/cheese/ashes.jpg"
                      data-lightbox-gallery="gallery1"

                    >

                      <div className="hover-text">
                        <h4>De Chèvre with ashes</h4>
                      </div>
                      <img
                        src="img/cheese/ashes.jpg"
                        className="img-responsive" alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="bestseller-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/cheese/classic.jpg"
                      data-lightbox-gallery="gallery1"
                    >
                      
                      <div className="hover-text">
                        <h4>Classic de Chèvre</h4>
                      </div>
                      <img
                        src="img/cheese/classic.jpg"
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="bestseller-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/cheese/pepper.jpg"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>De Chèvre with red Pepper</h4>
                      </div>
                      <img
                        src="img/cheese/pepper.jpg"
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="bestseller-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/cheese/classic.jpg"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>De Chèvre with Cinnamon</h4>
                      </div>
                      <img
                        src="img/cheese/classic.jpg"
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="bestseller-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/cheese/tomme.jpg"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Tomme</h4>
                      </div>
                      <img
                        src="img/cheese/tomme.jpg"
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="bestseller-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/cheese/camembert.jpg"
                      data-lightbox-gallery="gallery1"
                      alt=""
                    >
                      <div className="hover-text">
                        <h4>Camembert</h4>
                      </div>
                      <img
                        src="img/cheese/camembert.jpg"
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="bestseller-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/cheese/roquefort.jpg"
                      data-lightbox-gallery="gallery1"
                      alt=""
                    >
                      <div className="hover-text">
                        <h4>Roquefort</h4>
                      </div>
                      <img
                        src="img/cheese/roquefort.jpg"
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="bestseller-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/cheese/crottin.jpg"
                      data-lightbox-gallery="gallery1"
                      alt=""
                    >
                      <div className="hover-text">
                        <h4>Crottin de Chavignol</h4>
                      </div>
                  
                      <img
                        src="img/cheese/crottin.jpg"
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="bestseller-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/cheese/oldCam.jpg"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Soft Goat Cheese</h4>
                      </div>
                      <img
                        src="img/cheese/old-cam.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }}



export default Features;


//     return (
// //       <div id="features" className="text-center">
// //         <div className="container">
// //           <div className="col-md-10 col-md-offset-1 section-title">
// //             <h2>Bestsellers</h2>
// //           </div>
// //           <div className="row">
// //             {this.props.data
// //               ? this.props.data.map((d,i) => (
// //                   <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
// //                     {" "}
// //                       <img src={d.img} alt="..." className="team-img" />
// //                     <h3>{d.title}</h3>
// //                     <button type="button" class="btn btn-outline-primary" style={{marginBottom:"3em", marginTop: "1em", backgroundColor: "transparent"}}>{d.text}</button>
                  
                    
// //                   </div>
                  
                  
// //                 ))
// //               : "Loading..."}
// //           </div>

          
// //         </div>
// //       </div>
// //     );
// //   }
