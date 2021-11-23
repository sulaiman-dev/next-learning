import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
    return (
            <header className={`${styles['container']}`}>
               <div>
                   <Link href={'/feed'}>
                       <a className={`${styles['logo-text']}`}> Next/Social</a>
                   </Link>
               </div>
               <nav className={`${styles['nav']}`}>
                   <ul>
                       <li>
                           <Link href={"/feed/register"}>
                               <a>Register</a>
                           </Link>
                       </li>
                       <li>
                            <Link href={"/feed/login"}>
                               <a>Login</a>
                           </Link>
                       </li>
                   </ul>
               </nav>
            </header>
    )
}

export default Header
