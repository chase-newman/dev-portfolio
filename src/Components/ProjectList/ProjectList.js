import React from 'react';
import './ProjectList.css';
import Project from './Project/Project';
import Aux from '../../hoc/Aux';


const ProjectList = (props) => {
    let projects = props.projects.map((project, index) => {
        return <Project 
                    key={index} 
                    title={project.title} 
                    description={project.description}
                    imageUrl={project.imageUrl}
                    projectLink={project.projectLink}
                    gitHubLink={project.gitHubLink}/>
    });
    
    return (
        <Aux>
            <div className="row justify-content-center banner-row">
                <div className="col-lg-4 col-md-8 col-sm-10   justify-content-center">
                    <img src={props.headshot} alt="head-shot" className="img-fluid headshot"/>
                 </div>
                <div className="col-lg-5 col-md-8 col-sm-10   justify-content-center">
                    <h3 className="about-info">Hi, my name is Chase Newman. I'm a Front End Web Dev from New York, NY. 
                       Check out my projects below. They're built using React, React Router, Axios, Firebase, Redux, and more!
                    </h3>
                    <a 
                        href="#contact-me"
                        className="banner-link"
                        rel="noopener noreferrer">
                            <p style={{marginBottom: "0.5rem"}}>chasejn01@gmail.com <span><i className="fas fa-envelope"></i></span></p>
                    </a>
                    
                        <a 
                            href="https://github.com/chase-newman"
                            className="banner-link"
                            target="_blank"
                            rel="noopener noreferrer">
                                <p style={{marginBottom: "0.5rem"}}>Check out my Github <span><i className="fab fa-github"></i></span></p>
                        </a>
                        <a 
                            href="https://twitter.com/ChaseNewmanDev"
                            className="banner-link"
                            target="_blank"
                            rel="noopener noreferrer">
                                <p style={{marginBottom: "0.5rem"}}>Check out my Twitter <span><i className="fab fa-twitter"></i></span></p>
                        </a>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-md-8 col-sm-10">
                    <h1 className="projects-header">Projects <i className="fas fa-tools"></i></h1>
                </div>
            </div>
            <div className="row projects-row">
                {projects}
            </div>
        </Aux>
    );
};

export default ProjectList;