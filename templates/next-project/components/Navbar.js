import Link from 'next/link';

const Navbar = () => (
    <div>
        <ul className="nav">
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>
    
        <style jsx>{`
            ul {
                background: #333;
                color: #fff;
                list-style: none;
                display: flex;
                padding: 12px 0 12px 40px;
            }
            
            ul li {
                font-size: 18px;
                margin-right: 20px;
            }
    
            ul li a {
                color: #fff;
                text-decoration: none;
            }
        `}</style>
    </div>
);

export default Navbar;