import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">

            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <h2 className="colorlib-heading animate-box">Experience</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                     <div className="timeline-centered">
                         <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                            <div className="timeline-entry-inner">
                               <div className="experience-img" style={{backgroundImage: 'url(images/alexa.png)'}} />
                               <div className="timeline-icon color-1" style={{backgroundImage: 'url(images/alexa.png)'}}></div>
                               <div className="timeline-label">
                                  <h2>Amazon <span>Jul.2021-present</span></h2>
                                  <p>Software Dev Engineer</p>
                                  <ul>
                                    <li>Worked with the SmartMotion and Chimera teams under the Alexa MultiModal Initiatives org</li>
                                    <li>Developed and maintained Presence-related features on both Android and C++ for Alexa Echo Show Devices</li>
                                    <li>Worked with Computer vision team, Cloud team APIs and device-side state machines to create smart screen experiences</li>
                                    <li>Designed and implemented metrics dashboards on multiple platforms for operational excellence</li>
                                  </ul>
                               </div>
                            </div>
                         </article>

                         <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                            <div className="timeline-entry-inner">
                               <div className="experience-img" style={{backgroundImage: 'url(images/seagrant.jpg)'}} />
                               <div className="timeline-icon color-1" style={{backgroundImage: 'url(images/seagrant.jpg)'}}></div>
                               <div className="timeline-label">
                                  <h2>MIT SeaGrant <span>Sep.2020-Jun.2021</span></h2>
                                  <p>Research Assistant</p>
                                  <ul>
                                    <li>Help design, create, and program an autonomous surface vehicle to automate oyster farming for thesis</li>
                                    <li>Implement CV for object detection and path planning for navigating through farm and flipping oyster bags</li>
                                    <li>Design and program robot controls system via ROS and MOOS to operate consistently in oceanic environment for production</li>
                                  </ul>
                               </div>
                            </div>
                         </article>

                         <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                            <div className="timeline-entry-inner">
                               <div className="timeline-icon color-2" style={{backgroundImage: 'url(images/kitware.jpg)'}}/>
                               <div className="timeline-label">
                                <h2><a href="#">Kitware </a> <span>Jun.2020-Aug.2020</span></h2>
                                  <p>Software Engineering Intern</p>
                                  <ul>
                                    <li>Helped develop APIs for open source projects dealing with geospatial and MEVA data</li>
                                    <li>Added various features to annotation app to work with different datasets and be more robust</li>
                                    <li>Created a desktop version of an open source web app for video and Image analytics for aquatic environments</li>
                                  </ul>
                               </div>
                            </div>
                         </article>

                         <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                            <div className="timeline-entry-inner">
                               <div className="timeline-icon color-4" style={{backgroundImage: 'url(images/prg_logo.png)', backgroundSize: '95%'}}></div>
                               <div className="timeline-label">
                                <h2><a href="#">MIT Personal Robots Group </a> <span>Sep.2019-May.2020</span></h2>
                                  <p>Undergraduate Researcher</p>
                                  <ul>
                                    <li>Develop data pipelining system for semester long study with JIBO robot and schools in Atlanta, Georgia</li>
                                    <li>Optimize JIBO codebase and work on feature extraction for emotions via facial recognition</li>
                                  </ul>
                               </div>
                            </div>
                         </article>

                         <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                            <div className="timeline-entry-inner">
                               <div className="timeline-icon color-3" style={{backgroundImage: 'url(images/capitalone.png)', backgroundSize: '110%'}}></div>
                               <div className="timeline-label">
                                <h2><a href="#">Capital One </a> <span>Jun.2019-Aug.2019</span></h2>
                                  <p>Software Engineering Intern</p>
                                  <ul>
                                    <li>Created and deployed a data management API tool to production via an AWS Lambda and Custom Jenkins Pipelining</li>
                                    <li>Created an intermediate application to consume queries from Kafka streams in order to handle data in Postgres and Oracles DBs</li>
                                  </ul>
                               </div>
                            </div>
                         </article>

                         <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                            <div className="timeline-entry-inner">
                               <div className="timeline-icon color-5" style={{backgroundImage: 'url(images/misti.png)', backgroundSize: '110%'}}></div>
                               <div className="timeline-label">
                                <h2><a href="#">MIT Global Teaching Labs </a> <span>Jan.2019-Feb.2019</span></h2>
                                  <p>Teaching Assistant</p>
                                  <ul>
                                    <li>Ran a week long robotics workshop with 24 students from the Korea International School-Pangyo Middle School</li>
                                    <li>Taught at Korea International School-Jeju, giving hands on labs for basic circuitry, computer science, and other STEM topics</li>
                                  </ul>
                               </div>
                            </div>
                         </article>

                         <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                            <div className="timeline-entry-inner">
                               <div className="timeline-icon color-6" style={{backgroundImage: 'url(images/ultimate.jpeg)'}}></div>
                               <div className="timeline-label">
                                <h2><a href="#">Ultimate Software </a> <span>Jun.2018-Aug.2018</span></h2>
                                  <p>Software Engineering Intern</p>
                                  <ul>
                                    <li>Communicated with tax business analysts to complete stories to fix and optimize PTM Tax codebase</li>
                                    <li>Coded in C# and created SQL Stored Procedures to develop and test stories for Tax Filing team</li>
                                  </ul>
                               </div>
                            </div>
                         </article>
                         <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                            <div className="timeline-entry-inner">
                               <div className="timeline-icon color-none">
                               </div>
                            </div>
                         </article>
                      </div>
                   </div>
               </div>
            </div>
        </section>
      </div>
    )
  }
}