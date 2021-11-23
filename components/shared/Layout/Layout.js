import Header from '../../feed/Header/Header'
import styles from './Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
        <Header/>
        <div className={`${styles['container']}`}>
            {children}
        </div>
        </>
        
    )
}

export default Layout
