import React, { useEffect, useState } from 'react'
import { Main, Project, ProjectBody, ProjectHeader } from './style.js'
import axios from 'axios'


function Projects() {
  const url = "http://localhost:8080/projects"
  const [projects, setProjects] = useState([{}])
  
  useEffect(() => {
    axios.get(url).then(response => {
      setProjects(response.data)
    })
  }, [url]);

  return (
    <Main>
      <h1>Projects</h1>
      {
        projects.map((project, index) => {
          return <>
              <Project>
                  <ProjectHeader>
                        <h1 key={index}>{project?.title}</h1>
                        <div className="dates">
                          <p key={index}><strong>Begin:</strong> {project?.postedAt}</p>
                          <p key={index}><strong>Conclusion:</strong> {project?.updatedAt || "in progress"}</p>
                        </div>
                  </ProjectHeader>
                  <ProjectBody>
                    <p key={index}>{project?.description}</p>
                  </ProjectBody>
              </Project>
              </>
        })
      }
    </Main>
  )
}

export default Projects