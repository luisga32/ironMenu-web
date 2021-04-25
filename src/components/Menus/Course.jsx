import React from 'react';


const Course = ({course, setCourse, active}) => {
    const {name, description} = course;

    return (



        <li className="nav-item" role="presentation" key={name}>
            <button className={`nav-link ${active ? 'active': ''}`} id={`${name}-tab`} data-bs-toggle="tab" data-bs-target={`#${name}`} type="button" role="tab" 
                    aria-controls={name} aria-selected="true" onClick={() => setCourse(name)}>
               {description}
             </button>

        </li>

    )
}

export default Course;