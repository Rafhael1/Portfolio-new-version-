import React from "react";

export default class ContactForm extends React.Component {
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
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xqkgynkl"
        method="POST"
        id="contact"
      >
        <div>
        <label>Name:</label>
        <input placeholder="Peter Parker" type="text" name="name" require />
       </div>
       <div>
        <label>Email:</label>
        <input placeholder="nikola@tesla.com" type="email" name="email" />
        </div>
        <div>
        <label>Phone:</label>
        <input placeholder="xxx-xxx-xxx (Optional)" type="text" name="phone" />
        </div>
        <div>
        <label>Message:</label>
        <textarea placeholder="Type your message" name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        {status === "SUCCESS" ? <p className="Success" >Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p className="Error" >Ooops! There was an error.</p>}
      </form>
    );
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