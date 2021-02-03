import React from "react";

export default class ContactFormPT extends React.Component {
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
        <label>Nome:</label>
        <input placeholder="Peter Parker" type="text" name="name" require />
       </div>
       <div>
        <label>Email:</label>
        <input placeholder="nikola@tesla.com" type="email" name="email" />
        </div>
        <div>
        <label>Telefone:</label>
        <input placeholder="xxx-xxx-xxx (Opcional)" type="text" name="phone" />
        </div>
        <div>
        <label>Mensagem:</label>
        <textarea placeholder="Digite sua mensagem" name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        {status === "SUCCESS" ? <p className="Success" >Obrigado!</p> : <button>Enviar</button>}
        {status === "ERROR" && <p className="Error" >Ooops! Ocorreu um erro.</p>}
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