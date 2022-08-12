import React, {useEffect, useState} from 'react'
import { Main } from '../projects/style';
import { Educations, EducationHeader, EducationBody } from './style'
import axios from 'axios';

function Education() {
  const url = "http://localhost:8080/education"
  const [educations, setEducations] = useState([{}])
  
  useEffect(() => {
    axios.get(url).then(response => {
      setEducations(response.data)
    })
  }, [url]);

  return (
    <Main>
      <h1>Education</h1>
        {
                
                  educations.map((education, index) => {
                   return <>
                       <Educations>
                           <EducationHeader>
                                 <h1 key={index}>{education?.institute}</h1>
                                 <div className="dates">
                                   <p key={index}><strong>Begin:</strong> {education?.startedAt}</p>
                                   <p key={index}><strong>Conclusion:</strong> {education?.finishedAt || "in progress"}</p>
                                 </div>
                           </EducationHeader>
                           <EducationBody>
                             <p>{education?.classTitle}</p>
                           </EducationBody>
                       </Educations>
                       </>
               })
             
        }
    </Main>
  )
}

export default Education