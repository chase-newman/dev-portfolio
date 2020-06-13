import React from 'react';
import './ProjectList.css';
import Project from './Project/Project';


const ProjectList = (props) => {
    let projects = props.projects.map((project, index) => {
        return <Project 
                    key={index} 
                    title={project.title} 
                    description={project.description}
                    imageUrl={project.imageUrl}
                    link={project.link}/>
    });
    
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-sm-4 col-lg-4justify-content-center">
                    <h1 className="projects-header">Projects</h1>
                </div>
            </div>
            <div className="row justify-content-center project-row">
                {projects}
            </div>
        </div>
    );
};

export default ProjectList;