import A from '../components/A'
import Head from 'next/head'


export default function Index ()  {
  return (
    <>
      <Head>
        <meta keywords="saramazal projects"></meta>
        <title> Home Page</title>
        </Head>
   
    <header>
        <div className="navbar">
            <A href={'/'} text="Home"/>
            <A href={'/projects'} text="Projects"/>
        </div>
            <h1>Home Page</h1>
    </header> 
    </>
  );
};
