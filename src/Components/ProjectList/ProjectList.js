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
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-8 col-sm-10   justify-content-center">
                    <h1 className="projects-header">About</h1>
                    <p>Hi, my name is Chase Newman. I'm a Front End Web Dev from New York, NY. 
                       Check out my projects below. They're built using React, React Router, Axios, Firebase, Redux, and more!
                    </p>
                    <h1 className="projects-header">Projects</h1>
                </div>
            </div>
            <div className="row">
                {projects}
            </div>
        </Aux>
    );
};

export default ProjectList;