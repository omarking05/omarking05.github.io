import React from "react"
import styled from 'styled-components';

const Project = styled.a`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  color: #333;
  margin-bottom: .5rem;
  font-size: .87rem;
  &:hover {
    color: #5badf0;
  }
`

const ProjectDetails = styled.span`
  font-size: .87rem;
  color: #8e8e8e;
  &:hover {
    color: #5badf0;
  }
`


const ProjectContainer = ({ projects }) => (
  <>
    {
      projects.map(project => (
        <Project href={project.link} rel="noopener noreferrer" target='_blank'>
          <div style={{width: `100%`}}>
            {project.title}
          </div>
          <ProjectDetails>
            {project.desc} 
          </ProjectDetails>
        </Project>
      ))
    }
  </>
);

export default ProjectContainer;