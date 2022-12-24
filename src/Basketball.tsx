import styles from './Basketball.module.css';
const Basketball = () => {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.basketball}>
                    <span className={styles.leftLine}></span>
                    <span className={styles.centerVLine}></span>
                    <span className={styles.centerHLine}></span>
                    <span className={styles.rightLine}></span>
                </div>
            </div>
        </>
    )
}

export default Basketball;