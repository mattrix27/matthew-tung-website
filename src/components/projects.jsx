import React, { Component } from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

export default class Projects extends Component {
  constructor () {
    super();
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
    };
    
    this.handleOpenModal1 = this.handleOpenModal1.bind(this);
    this.handleCloseModal1 = this.handleCloseModal1.bind(this);

    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    
    this.handleOpenModal3 = this.handleOpenModal3.bind(this);
    this.handleCloseModal3 = this.handleCloseModal3.bind(this);
    
    this.handleOpenModal4 = this.handleOpenModal4.bind(this);
    this.handleCloseModal4 = this.handleCloseModal4.bind(this);
    
    this.handleOpenModal5 = this.handleOpenModal5.bind(this);
    this.handleCloseModal5 = this.handleCloseModal5.bind(this);
  }
  
  handleOpenModal1 () {
    this.setState({ showModal1: true });
  }
  handleCloseModal1 () {
    this.setState({ showModal1: false });
  }

  handleOpenModal2 () {
    this.setState({ showModal2: true });
  }
  handleCloseModal2 () {
    this.setState({ showModal2: false });
  }

  handleOpenModal3 () {
    this.setState({ showModal3: true });
  }
  handleCloseModal3 () {
    this.setState({ showModal3: false });
  }

  handleOpenModal4 () {
    this.setState({ showModal4: true });
  }
  handleCloseModal4 () {
    this.setState({ showModal4: false });
  }

  handleOpenModal5 () {
    this.setState({ showModal5: true });
  }
  handleCloseModal5 () {
    this.setState({ showModal5: false });
  }

  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <h2 className="colorlib-heading animate-box">Projects</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                        <div className="project" style={{backgroundImage: 'url(images/oystamaran.png)', backgroundPosition: '38% 22%'}}>
                            <div className="desc">
                                <div className="con" onClick={this.handleOpenModal1}>
                                  <h3>Oystamaran</h3>
                                </div>
                                <ReactModal 
                                  isOpen={this.state.showModal1}
                                  contentLabel="onRequestClose Example"
                                  onRequestClose={this.handleCloseModal1}
                                  shouldCloseOnOverlayClick={true}
                                >
                                  <div className="modal-header">
                                    <h3>Oystamaran <a href="https://github.com/mattrix27/oyster_controller" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></h3>
                                  </div>
                                  <div className="modal-body">
                                    <div style={{textAlign: "center",}}>
                                      <iframe 
                                        width="100%"
                                        height="315"
                                        src="https://www.youtube.com/embed/MJSr8zGNTb8"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                      >
                                      </iframe>
                                    </div>

                                    <p><br></br>In cooperation with the 2.017 course and Dan Ward of Ward Aquafarms LLC., designs for an autonomous oyster flipping ASV were created.
                                       In order to reduce the build up of algae and promote sufficient oxygens to the oysters, the bags in which the farmed oysters are carried in must be flipped weekly.
                                       This catamaran design was made to reduce the required manpower to flip these bags.
                                       We are designing, developing and implementing the frame, hardware and software of this vehicle in  the MIT Seagrant lab, and using the novel autonomy stack (perception, path planning, etc.) via ROS and MOOS to complete our task.
                                    </p>
                                  </div>
                                  <div className="modal-footer">
                                    <button className ="modal-close-btn" onClick={this.handleCloseModal1}>Close</button>
                                  </div>
                                </ReactModal>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                        <div className="project" style={{backgroundImage: 'url(images/dance_s.jpeg)'}}>
                            <div className="desc">
                                <div className="con" onClick={this.handleOpenModal2}>
                                    <h3>FPGA DDR</h3>
                                </div>
                                <ReactModal 
                                  isOpen={this.state.showModal2}
                                  contentLabel="onRequestClose Example"
                                  onRequestClose={this.handleCloseModal2}
                                  shouldCloseOnOverlayClick={true}
                                >
                                  <div className="modal-header">
                                    <h3>FPGA DDR <a href="https://github.com/mattrix27/6111-final/" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></h3>
                                  </div>
                                  <div className="modal-body">
                                    <div style={{textAlign: "center",}}>
                                      <iframe 
                                        width="100%"
                                        height="315"
                                        src="https://www.youtube.com/embed/t1Yb3eaC2yE"
                                        frameborder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                      </iframe>
                                    </div>
                                    <p><br></br>Using a FFGA labkit from the MIT course 6.111, we created a version of Dance Dance Revolution.
                                       Using simple capacitance switchs, VGA monitor, and audio I/O devices, we were able to design and implement a simple version of the popular arcade game, able to randomly generate steps from the beats in songs in real time.
                                    </p>
                                  </div>
                                  <div className="modal-footer">
                                    <button className="modal-close-btn" onClick={this.handleCloseModal2}>Close</button>
                                  </div>
                                </ReactModal>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                        <div className="project" style={{backgroundImage: 'url(images/car.png)', backgroundSize: '60%'}}>
                            <div className="desc">
                                <div className="con" onClick={this.handleOpenModal3}>
                                    <h3>RC Car Fast Obstacle Avoidance</h3>
                                </div>
                                <ReactModal 
                                  isOpen={this.state.showModal3}
                                  contentLabel="onRequestClose Example"
                                  onRequestClose={this.handleCloseModal3}
                                  shouldCloseOnOverlayClick={true}
                                >
                                  <div className="modal-header">
                                    <h3>RC Car Fast Obstacle Avoidance <a href="https://github.com/mattrix27/racecar_ws" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></h3>
                                  </div>
                                  <div className="modal-body">
                                    <div style={{textAlign: "center"}}>
                                      <iframe
                                        width="100%"
                                        height="315"
                                        src="https://www.youtube.com/embed/qYb9GU3Gv3M"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen
                                      >
                                      </iframe>
                                    </div>
                                    <p><br></br>For our final project in 6.141, we were challenged with being able to program an RC car to navigate through a random path of obstacles as fast as possible.
                                       Using LiDar data to generate paths, we were able to program the RC car via ROS to navigate through efficiently.
                                    </p>
                                  </div>
                                  <div className="modal-footer">
                                    <button className ="modal-close-btn" onClick={this.handleCloseModal3}>Close</button>
                                  </div>
                                </ReactModal>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
                        <div className="project" style={{backgroundImage: 'url(images/pilam2.png)', backgroundSize: '70%'}}>
                            <div className="desc">
                                <div className="con" onClick={this.handleOpenModal4}>
                                    <h3>RE-MIND</h3>
                                </div>
                                <ReactModal 
                                  isOpen={this.state.showModal4}
                                  contentLabel="onRequestClose Example"
                                  onRequestClose={this.handleCloseModal4}
                                  shouldCloseOnOverlayClick={true}
                                >
                                  <div className="modal-header">
                                    <h3>RE-MIND <a href="https://github.com/mattrix27/RE-MIND" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></h3>
                                    <a></a>
                                  </div>
                                  <div className="modal-body">
                                    <img src="/images/remind.png" alt="remind" width="100%"></img>
                                    <p><br></br>As president of my fraternity, I had to send a variety of messages and requests to my brothers.
                                       Messages sent through email and/or group chat would often go unlooked due to muting of the chat or being lost in the ether of spam.
                                       I created this simple set of python scripts to be able to send direct messages using the FB Messenger, Slack, and Google Sheets APIs to remind brothers of their scheduled responsibilites or general important announcment.
                                    </p>
                                  </div>
                                  <div className="modal-footer">
                                    <button className ="modal-close-btn" onClick={this.handleCloseModal4}>Close</button>
                                  </div>
                                </ReactModal>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
                        <div className="project" style={{backgroundImage: 'url(images/bodypose.png)'}}>
                            <div className="desc">
                                <div className="con" onClick={this.handleOpenModal5}>
                                    <h3>Reading Pose Extraction</h3>
                                </div>
                                <ReactModal 
                                  isOpen={this.state.showModal5}
                                  contentLabel="onRequestClose Example"
                                  onRequestClose={this.handleCloseModal5}
                                  shouldCloseOnOverlayClick={true}
                                >
                                  <div className="modal-header">
                                    <h3>Reading Pose Extraction <a href="https://github.com/mattrix27/body-pose-extraction" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></h3>
                                  </div>
                                  <div className="modal-body">
                                    <img src="/images/parentchild.png" alt="parentchild" width="100%"></img>
                                    <p><br></br>At the Personal Robots Group of the MIT Media Lab, we were attempting to use OpenPose and face detection to analyze facial and body patterns of a parent and child when reading together.
                                       Using these patterns to determine features of the interaction and whether or not the child is engaged, we were attempting to train a model off this data to integrate into the JIBO Robot to be used in a study at a school in Atlanta.
                                    </p>
                                  </div>
                                  <div className="modal-footer">
                                    <button className ="modal-close-btn" onClick={this.handleCloseModal5}>Close</button>
                                  </div>
                                </ReactModal>
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
