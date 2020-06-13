import React from 'react';
import './Project.css'

const Project = (props) => (
        <div className="col-lg-4 col-md-10 col-sm-12 project-col">
            <h4>{props.title}</h4>
            <img 
                className="img-thumbnail"
                src={props.imageUrl}
                alt="preview" />
            <p>{props.description}</p>
            <p><a href={props.link} 
                  target="_blank"
                  rel="noopener noreferrer">Link to Project -></a></p>
        </div>
);

export default Project;