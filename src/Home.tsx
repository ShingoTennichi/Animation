import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home():JSX.Element {
    return (
        <div className={styles.container}>
            <div>
                <h1>Links</h1>
                <Link to={'/basketball'} >Basketball</Link>
            </div>
        </div>
    )
}

export default Home;