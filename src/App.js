import React, {Component} from 'react';
import Aux from './hoc/Aux';
import Header from './Components/Header/Header';
import ProjectList from './Components/ProjectList/ProjectList';
import ContactForm from './Containers/ContactForm/ContactForm';
import './App.css';

class App extends Component {
  state = {
    projects: [
      {
        title: "Crypto Desk",
        imageUrl: "./assets/crypto-desk.png",
        description: "Project Description...",
        link: "http://crypto-desk.s3-website-us-east-1.amazonaws.com/"
      },
      {
        title: "Productivity App",
        imageUrl: "./assets/productivity-app.png",
        description: "Project Description...",
        link: "http://react-portfolio-productivity-app.s3-website.us-east-2.amazonaws.com/"
      },
      {
        title: "Burger Builder App",
        imageUrl: "./assets/burger-builder-app.png",
        description: "Project Description...",
        link: "http://react-burger-builder-app.s3-website-us-east-1.amazonaws.com/"
      }
      ]
  }
  
  render() {
    return (
      <Aux>
        <Header/>
        <div className="container-fluid">
          <ProjectList projects={this.state.projects}/>
          <ContactForm />
        </div>
      </Aux>
    );    
  }
}

export default App;
