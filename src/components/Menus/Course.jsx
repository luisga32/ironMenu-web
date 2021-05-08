import React from 'react';
import { useOrderContext } from '../../hooks/useOrderContext';
import './Course.css'



const Course = ({ course, setCourse, active ,width}) => {
    const { name, description } = course;

    const { order } = useOrderContext();


    // search if there is a dish of this course in the order. Change de name
    let courseDescription = description;
    if (order.orderItems.length > 0) {
        const itemDescription = order.orderItems.find((item) => {
            return item.course === name
        })
        if (itemDescription) {
            courseDescription = itemDescription.title
        }
    }

    return (



        <li className={`nav-item Course align-items-center  ${width}`} role="presentation" >
            <button className={`nav-link ${active ? 'active buttonCourseActive' : 'buttonCourseNotActive'}`} id={`${name}-tab`}
                data-bs-toggle="tab" data-bs-target={`#${name}`} type="button" role="tab"
                aria-controls={name} aria-selected="true" onClick={() => setCourse(name)}>
                {courseDescription}
            </button>

        </li>

    )
}

export default Course;