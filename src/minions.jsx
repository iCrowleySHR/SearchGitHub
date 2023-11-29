import styles from'./assets/css/minions.module.css'
import minions from './assets/img/minios.gif'



function Minions(){

    return(
        <>
        <div className={styles.container}>
            <a href="https://github.com/iCrowleySHR" target='_blank'>
                <img src={minions} className={styles.Minions} alt="Minions picture" />
            </a>
        </div>
        </>
    )
}


export default Minions