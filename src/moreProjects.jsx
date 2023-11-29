import styles from './assets/css/moreProjects.module.css'
import dailyJoke from './assets/img/dailyJoke.png'
import battleTetris from './assets/img/battletetris.png';

function MoreProjects(){
    return(
        <>
        <section className={styles.section}>
            <h1 className={styles.titleProjects}>See my other projects!</h1>
            <section className={styles.showcaseProjects}> 
                <article className={styles.projects}>
                    <img src={dailyJoke} alt="Image from project Daily Joke" className={styles.imgProjects}/>
                    <h2>DailyJoke</h2>
                    <p>
                    This is a responsive website that randomly generates jokes using an API. Regardless of the device you are using, you can enjoy an optimized user experience.
                    </p>
                    <a href=''>See more!</a>
                </article>
                <article className={styles.projects}>
                    <img src={battleTetris} alt="Image from project Battle Tetris" className={styles.imgProjects}/>
                    <h2>Battle Tetris</h2>
                    <p>
                    Welcome to Battle Tetris Offline, an exciting Tetris game to play offline! This game offers a classic Tetris experience with some additional features to make the gameplay even more fun and customizable. Made by <a href="https://github.com/iCrowleySHR" target='_blank'>Gustavo Gualda</a>, <a href="" target='_blank'>João Paulo</a> and <strong>João Luiz</strong>. Made for institutional use.
                    </p>
                    <a href=''>See more!</a>
                </article>
            </section>
        </section>
        </>
    )
}

export default MoreProjects