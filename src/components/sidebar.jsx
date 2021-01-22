import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Matthew Tung</a></h1>
              <span className="email"><a href="mailto:mtung1998@gmail.com"><i className="icon-mail"></i>mtung1998@gmail.com</a></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">home</a></li>
                  <li><a href="#" data-nav-section="about">About</a></li>
                  <li><a href="#" data-nav-section="education">Education</a></li>
                  <li><a href="#" data-nav-section="experience">Experience</a></li>
                  <li><a href="#" data-nav-section="projects">Projects</a></li>
                  {/*<li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#" data-nav-section="contact">Contact</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <div><li><a href="https://www.facebook.com/matthew.tung.355/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2"></i></a></li></div>
                <li><a href="https://www.instagram.com/themattrix27/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"/></a></li>
                <li><a href="https://www.linkedin.com/in/matthew-tung-53ab95148/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/mattrix27" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://youtube.com/TheMattrix27" target="_blank" rel="noopener noreferrer"><i className="icon-youtube"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  <p style={{marginBottom: "0.5em"}}>&#169; Copyrights Matthew Tung All rights reserved.<br></br>
                  Base Template by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a></p>
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
