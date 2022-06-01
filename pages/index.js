import A from '../components/A'


export default function index() {
  return (
    <div className="header">
        <div className="navbar">
            <A href={'/'} text="Home"/>
            <A href={'/projects'} text="Projects"/>
        </div>
            <h1>Home Page</h1>
    </div>
  )
}
