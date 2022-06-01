import { useEffect, useState} from 'react'
import Link from 'next/link'
import MainContainer from '../components/MainContainer'

const Projects = ({projects}) => {
   
     return (
        <MainContainer keywords={'projects next js'}>
            <h1>My Best Projects</h1>
            <ul className="projects-list">
                {projects.map(project => 
                <li key={project.id}>
                <Link href={`/projects/${project.id}`}>
                 <a>{project.title}</a>
                </Link>
               </li>
                )}
            </ul>
        </MainContainer>
    );
}

export default Projects;

export async function getStaticProps(context) {
    const response = await fetch(`https://mockend.com/saramazal/mazal-next-project/projects`)
    const projects = await response.json()
      return {
        props: {projects},
    }
}
