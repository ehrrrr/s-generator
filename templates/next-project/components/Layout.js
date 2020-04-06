import Head from 'next/head';
import Navbar from '../components/Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Hello Next</title>
            <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css"/>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.css"/>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;