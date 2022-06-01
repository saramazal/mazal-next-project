import {useState, useEffect} from 'react'
import Link from 'next/link'

const Projects = ({projects}) => {
   
 
    return (
        <div>
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
        </div>
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
