import { createContext,useState } from "react";

export const CourseContext = createContext();

export function CourseContextProvider ({children}) {
  //  const courseInit = 'starter'

    const [course, setCourse] = useState('starter')

    // useEffect (() => {
    //     console.log(' cambia course', course)

    // },[course])

    const value = {
        course,
        setCourse
    }
    return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
}