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
        description: "Cryptocurrency app which gives you real time price data for up to 8 different coins, while providing top news stories and historical price data all visualized with chartJS",
        projectLink: "http://crypto-desk.s3-website-us-east-1.amazonaws.com/",
        gitHubLink: "https://github.com/chase-newman/crypto-desk.git"
      },
      {
        title: "Productivity App",
        imageUrl: "./assets/productivity-app.png",
        description: "Productivity app which uses CRUD functionality to store to-do list items on a Firebase DB",
        projectLink: "http://react-portfolio-productivity-app.s3-website.us-east-2.amazonaws.com/",
        gitHubLink: "https://github.com/chase-newman/productivity-app.git"
      },
      {
        title: "Stock Market Data App",
        imageUrl: "./assets/stock-market-data-app.png",
        description: "Stock Market Data app that allows you to login and search stock prices from the past 30 days, visualized with chartJS ",
        projectLink: "http://market-data-app.s3-website-us-east-1.amazonaws.com/",
        gitHubLink: "https://github.com/chase-newman/market-data-app"
      },
      {
        title: "Burger Builder App",
        imageUrl: "./assets/burger-builder-app.png",
        description: "A burger ordering app which allows you to login, create your own burger and submit an order. Also stores all previous burger orders for each authenticaed user",
        projectLink: "http://react-burger-builder-app.s3-website-us-east-1.amazonaws.com/",
        gitHubLink: "https://github.com/chase-newman/burger-builder-app"
      }
      ],
      headshot: "./assets/headshot-sketch.jpg"
  }
  
  render() {
    return (
      <Aux>
        <Header/>
        <div className="container-fluid">
          <ProjectList 
            projects={this.state.projects}
            headshot={this.state.headshot}/>
          <ContactForm />
        </div>
      </Aux>
    );    
  }
}

export default App;
