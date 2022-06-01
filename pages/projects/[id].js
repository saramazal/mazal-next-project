import {useRouter} from 'next/router'
import styles from '../../styles/project.module.scss'

export default function Project({project}) {
    const {query} = useRouter()
    console.log(query)

return  (
    <div className={styles.project}>
      <h1>Project {query.id}</h1>
      <div>Name of Project - {project.title}</div>
      </div>
    )
};

export async function getServerSideProps({params}) {
  const response = await fetch(`https://mockend.com/saramazal/mazal-next-project/projects/${params.id}`)
  const project = await response.json()
    return {
      props: {project},
  }
}
