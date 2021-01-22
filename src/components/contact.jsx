import React, { Component } from 'react'

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <section className="colorlib-contact" data-section="contact">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                {/*<span className="heading-meta">Get in Touch</span>*/}
                <h2 className="colorlib-heading">Contact Me!</h2>
              </div>
            </div>
            <div className="row">
{/*              <div className="col-md-5">
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-globe-outline"></i>
                  </div>
                  <div className="colorlib-text">
                    <span><a href="mailto:mtung1998@gmail.com">mtung1998@gmail.com</a></span>
                  </div>
                </div>

                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-map"></i>
                  </div>
                  <div className="colorlib-text">
                    Matthew Tung<br></br>35 Brookline Street, Apt. 15<br></br>Cambridge, MA 02139
                  </div>
                </div>

                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-phone"></i>
                  </div>
                  <div className="colorlib-text">
                    <span><a href="tel:1-360-431-2901">360-431-2901</a></span>
                  </div>
                </div>
              </div>*/}
              {/*<div className="col-md-7 col-md-push-1">*/}
              <div>
                <div className="row">
                  <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                    <form
                      onSubmit={this.submitForm}
                      action="https://formspree.io/f/mpzobqvp"
                      method="POST"
                    >
                      <div className="form-group">
                        <input type="text" name="name" className="form-control" placeholder="Name" />
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" className="form-control" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <input type="text" name="subject" className="form-control" placeholder="Subject" />
                      </div>
                      <div className="form-group">
                        <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                      </div>
                      <div className="form-group">
                        {/*<input type="submit" className="btn btn-primary btn-send-message" value="Send Message" />*/}
                        {status === "SUCCESS" ? <p>Thanks!</p> : <input type="submit" className="btn btn-primary btn-send-message" value="Send" />}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                      </div>
                    </form>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

}