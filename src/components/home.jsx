import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/powerranger5.jpg)'}}>
                {/*<div className="overlay" />*/}
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{color: "white"}}>Hi! <br />I'm Matthew</h1>
                          <p><a style={{color: "white", border: '1px solid #fff'}} className="btn btn-primary btn-learn" href="/downloads/Matthew_Tung_Resume_9_18_20.pdf" download>Resume<i className="icon-download4"/></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/linkedin.jpeg)'}}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{color: "white"}}>Hi! <br />I'm Matthew</h1>
                          <p><a style={{color: "white", border: '1px solid #fff'}} className="btn btn-primary btn-learn" href="/downloads/Matthew_Tung_Resume_9_18_20.pdf" download>Resume<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/sleeping.jpeg)'}}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{color: "white"}}>Hi! <br />I'm Matthew</h1>
                          <p><a style={{color: "white", border: '1px solid #fff'}} className="btn btn-primary btn-learn" href="/downloads/Matthew_Tung_Resume_9_18_20.pdf" download>Resume<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
