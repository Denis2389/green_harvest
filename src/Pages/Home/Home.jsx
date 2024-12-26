import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Main />
        </div>
    )
}

export default Home