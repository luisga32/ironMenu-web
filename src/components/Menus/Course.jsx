import React from 'react';
import './Course.css'



const Course = ({course, setCourse, active}) => {
    const {name, description} = course;
    

    return (



        <li className="nav-item Course align-items-center" role="presentation" >
            <button className={`nav-link ${active ? 'active buttonCourseActive': 'buttonCourseNotActive'} `} id={`${name}-tab`} data-bs-toggle="tab" data-bs-target={`#${name}`} type="button" role="tab" 
                    aria-controls={name} aria-selected="true" onClick={() => setCourse(name)}>
               {description}
             </button>

        </li>

    )
}

export default Course;