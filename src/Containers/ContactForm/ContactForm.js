import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
  constructor(props) {
	  super(props);
	  this.state = {
	      feedback: '', 
	      name: '', 
	      email: '' 
	  };
  }
  
  handleSubmit = (event) => {
	  const templateId = 'template_8SZU0yPX';
    this.sendFeedback(
        templateId, 
        {
          message_html: this.state.feedback, 
          from_name: this.state.name, 
          reply_to: this.state.email
        });
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  sendFeedback (templateId, variables) {
    //emailjs script tag in header of index.html
  	window.emailjs.send('gmail', templateId,variables)
  	  .then(res => {
      	alert("Email successfully sent!");
      	this.setState({
      	  feedback: '', 
	        name: '', 
	        email: '' 
      	});
    	})
    	// Handle errors
    	.catch(err => console.error(err));
    }
    

  render() {
	  return (
	    <div className="row contact-row justify-content-center" id="contact-me">
	      <div className="col-lg-6 col-md-8 col-sm-12 contact-col">
        	<form className="form-group">
          	<h1>Contact Me <i className="fas fa-envelope"></i></h1>
          	<div>
            	<label>name</label>
            	<input
            	  className="form-control"
            	  name="name"
            	  type="text"
            	  value={this.state.name}
            	  onChange={this.handleChange}
            	  required/>
          	</div>
          	<div>
            	<label>e-mail</label>
            	<input
            	  className="form-control"
            	  name="email"
            	  type="email"
            	  value={this.state.email}
            	  onChange={this.handleChange}
            	  required/>
          	</div>
          	<div>
          	  <label>message</label>
            	<textarea
            	  className="form-control"
              	id="test-mailing"
              	name="feedback"
              	onChange={this.handleChange}
              	placeholder="Please type message here..."
              	required
              	value={this.state.feedback}
              	style={{width: '100%', height: '150px'}}
            	/>
          	</div>
          	<input 
          	  type="button" 
          	  value="Submit" 
          	  className="btn btn--submit" 
          	  id="submit-btn"
          	  onClick={this.handleSubmit} />
        	</form>
    	  </div>
    	</div>
  	)
  }  
}

export default ContactForm;