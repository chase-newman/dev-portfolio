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
                            <h5>chasejn01@gmail.com <span><i class="fas fa-2x fa-envelope"></i></span></h5>
                    </a>
                    <a 
                        href="https://github.com/chase-newman"
                        className="banner-link"
                        target="_blank"
                        rel="noopener noreferrer">
                            <h5>Check out my Github <span><i className="fab fa-2x fa-github"></i></span></h5>
                    </a>
                    
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-8 col-sm-10   justify-content-center">
                    <h1 className="projects-header">Projects</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                {projects}
            </div>
        </Aux>
    );
};

export default ProjectList;