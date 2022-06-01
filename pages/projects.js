import { useState } from 'react'
import Link from 'next/link'

const Projects = () => {
    const [projects, setProjects] = useState([
        {id: 1, title: 'Music App'},
        {id: 2, title: 'Learning Portal'}
    ])
    return (
        <div>
            <h1>My Best Projects</h1>
            <ul>
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
