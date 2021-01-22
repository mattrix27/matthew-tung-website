import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-education" data-section="education">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Education</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <div className="fancy-collapse-panel">
                  <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne">
                            <h4 className="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Massachusetts Institute of Technology (MIT) 
                                <span> Sep.2020-Jun.2021</span>
                              </a>
                            </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                             <div className="panel-body">
                              {/*<div className="row">*/}
                                <div style={{paddingTop: "50px"}}>
                                  <p><i>M.Eng in Computer (AI and Robotics focus)</i></p>
                                </div>
                                <p>GPA: 5.0<br></br>Thesis being done at MIT Seagrant under Michael Triantafyllou on Autonomous Surface Vehicles for the Application of Oyster Farming</p>
                              {/*</div>*/}
                             </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingTwo">
                            <h4 className="panel-title">
                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Massachusetts Institute of Technology (MIT) 
                                  <span> Sep.2016-Jun.2020</span>
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                            <div className="panel-body">
                                <p style={{paddingTop: "110px"}}><i>B.S. in Electrical Engineering and Computer Science</i></p>
                                <p>GPA: 4.4<br></br><strong>Relevant Courses:</strong> Underactuated Robotics, Robotic Manipulation, Robotics Sci. & Sys., Digital Systems Lab, Nanoelectronics, Artificial Intelligence, Machine Learning, Deep Learning for Self-Driving Cars, EECS through Robotic Sensing, Algorithms, Computational Structures, Circuits and Electronics, Data Science, Probability and Random Variables, Differential Equations, Linear Algebra</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}