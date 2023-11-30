import './assets/css/Result.css'
import Minions from './minions'

function Result(props){
    let message_bio = 'The user does not have a bio!'
    let message_name = 'No name on record!'
    let notFoundMSG = props.msg == 'Not Found' ? 'user-activate' : 'user-disable'
    let hiddenInfo = props.msg == 'Not Found' ? 'user-disable' : 'user-activate'
    return(
        <>
        
            <h1 className={notFoundMSG} id='notMSG'>User not found<br /> 😥😣</h1>
            <section className={hiddenInfo}>
                <div className="profile-container" style={{ display: props.img == '' ? 'none' : 'flex' }}> 
                    <section className="area-profile" >
                        <a href={props.url} target='_blank'>
                            <img src={props.img} alt="image from user" className='img-user' />
                        </a>
                        <a href={props.url} target='_blank'>
                            <h1 className='user-login'>{props.login}</h1>
                        </a>
                        <a href={props.url} target='_blank'>
                            <h2 className='user-name'>{props.name == null ? message_name : props.name}</h2>
                        </a>
                        <a href={props.url} target='_blank'>
                            <p className='user-bio'>{props.bio == null ? message_bio : props.bio}</p>
                        </a>
                        
                        <Minions/>

                        <div className="line"></div>
                        <br />

                        <section className="container-infos">
                            <div className="infos">
                               Repositórios <br />
                               <div className='values-infos'>{props.repos == '' ? '0' : props.repos}</div>
                            </div>
                            <div className="infos">
                                Seguidores<br />
                                <div className='values-infos'>{props.followers == '' ? '0' : props.followers }</div>
                            </div>
                            <div className="infos">
                                Seguindo <br />
                                <div className='values-infos'>{props.following == '' ? '0' : props.following}</div>
                            </div>
                        </section>
                        <br />
                    </section>
                </div>
            </section>
            
        </>
    )
}

export default Result