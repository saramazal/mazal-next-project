import Link from 'next/link'


export default function index() {
  return (
    <div>
        <div>
            <Link href="/">
            <a>Home</a>
            </Link>
            <Link href="/projects">
            <a>Projects</a>
            </Link>

        </div>
            <h1>Home Page</h1>
    </div>
  )
}
