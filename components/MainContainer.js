import Head from 'next/head'
import A from './A'

const MainContainer = ({children, keywords}) => {
    return (
        <>
          <Head>
            <meta keywords={"saramazal projects" + keywords}></meta>
            <title> Home Page</title>
          </Head>
   
        <header>
        <div className="navbar">
            <A href={'/'} text="Home"/>
            <A href={'/projects'} text="Projects"/>
        </div>
        </header> 
    <div>
        {children}
    </div>
            
        </>
    );
}

export default MainContainer;
