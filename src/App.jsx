import styles from './assets/css/App.module.css'
import Result from './Result.jsx'
import MoreProjects from './moreProjects.jsx';
import Footer  from './footer.jsx';
import { BsSearch } from 'react-icons/bs'
import React, { useState } from 'react';



function App() {
  const [img, setImg] = useState(''); 
  const [login, setLogin] = useState('');
  const [bio, setBio] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('');
  const [following, setfollowing] = useState('');
  const [followers, setfollowers] = useState('');
  const [repos, setRepos] = useState('');


  function search(){

    let pesquisa =  document.querySelector('#pesquisa').value
    let linkAPI = `https://api.github.com/users/${pesquisa}`  
    fetch(`${linkAPI}`, {
      method: 'GET'
    })
      .then(resposta => resposta.json())
      .then(dados => {
        const userLogin = dados.login
        setLogin(userLogin)

        const userImg = dados.avatar_url
        setImg(userImg); 

        const userBio = dados.bio
        setBio(userBio)
        
        const userName = dados.name
        setName(userName)

        const messageError = dados.message
        setMessage(messageError)

        const linkProfile = dados.html_url
        setUrl(linkProfile)

        const publicRepos = dados.public_repos
        setRepos(publicRepos)

        const followers = dados.followers
        setfollowers(followers)

        const following = dados.following
        setfollowing(following)


        console.log(dados)

      })
      .catch(erro => {
        console.error('Erro:', erro);
      });
 
  }
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      search();
    }
  }


  return(
    <>
    <main>
      <div className={styles.areaSearch}>
        <BsSearch className={styles.icon}/>
        <input type="text" id="pesquisa" placeholder='Search Github Profiles' autoComplete='off' onKeyPress={handleKeyPress}/>  
        <button onClick={search}>Enviar</button>
      </div>
      <Result name={name} img={img} bio={bio} login={login} msg={message} url={url} repos={repos} followers={followers} following={following}/>
      <MoreProjects/>
      <Footer />
    </main>
    </>
  )
}
export default App
