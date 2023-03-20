import React, { useState, useRef, useContext } from 'react'
import AuthContext from './context/AuthContext'
import Button from './UI/Button'
import Modal from './UI/Modal'

export default function FormAuth() {

  //On utilise le context
  const authCtx = useContext(AuthContext)
  console.log(authCtx)

  //ON utilise useRef pou récupérer les valeurs inscrites dans le formulaire
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const pseudoInputRef = useRef()

  //On modifie le component en fonction de si l'utilisateur veut se connecter ou s'inscrire
  //On créer un state qui gérera si l'utilisateur se connecte ou non
  const [isLogging, setIsLogging] = useState(true)

  //On crée un state qui gérera la modale
  const [message, setMessage] = useState()

  //On crée un state qui va gérer les données envoyées avec fetch
  const [data, setData] = useState()



  //On créer une fonction qui modifiera la state isLogging
  const loggingHandler = () => {
    setIsLogging(!isLogging)
  }

  //Créer une fonction qui va envoyer les données du formulaire
  //On veut qu'elle soit appelée au clic sur le bouton
  const submitHandler = (e) => {
    e.preventDefault()

    //On récupère les valuers du formulaires
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value

    const validEmail = new RegExp('^[a-z0-9.]+@[a-z]+.[a-z]{2,3}').test(email)

    //Si on s'inscrit, on aura besoin du pseudo
    //Alors si la valeur pseudo est diffférent de undefined
    //Enregistrer sa valeur
    // if (pseudoInputRef.current !==undefined) {
    //   const pseudo = pseudoInputRef.current.value
    // }

    //On va maintenant vérifier la validité du formulaire
    //Si l'email est vide, afficher une erreur
    if (email.trim().length === 0) {
      setMessage({
        head: "Email vide",
        body: "Veuillez renseigner un email"
      })
    }

    //Si le mot de passe est vide, afficher une erreur
    else if (password.trim().length === 0) {
      setMessage({
        head: "Mot de passe vide",
        body: "Veuillez renseigner un mot de passe"
      })
    }

    else if (!validEmail) {
      setMessage({
        head: "Email non valide, veuillez renseigner un email correct",
        body: "Veuillez renseigner un email correct"
      })

      //Si tout est valide, envpyer les données
    } else {
      // setMessage({
      //   head: "Connexion",
      //   body: "Vous avez été authentifié"
      // })


      const url = "http://localhost:8080/api/auth/login"

      //Fonction qui va envoyer les données à l'API
      const fetchHandler = async () => {
        try {
          const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password
            }),
            headers: {
              "Content-Type": "application/json"
            }
          })

          if (response.ok) {
            const dataResponse = await response.json()
            setData(dataResponse)
            console.log(data)
            authCtx.login(data.token, data.userId)
          } else {
            setMessage({
              head: "l'Email saisie n'existe pas dans la base de donnée",
              body: "Veuillez renseigner un email correct"
            })
          }

        }

        catch (error) {
          console.log(error)
        }

      }

      fetchHandler()
    }
  }

  //Fonction qui réinitialise le state message à null
  const messageHandler = () => {
    setMessage(null)
  }

  const isLoggedIn = authCtx.isLoggedIn

  return (
    <div className='auth-form auth-form--size'>
      {message && <Modal head={message.head} body={message.body} onConfirm={messageHandler} />}
      {isLogging ? <h1>Connectez-vous</h1> : <h1>Inscrivez-vous</h1>}
      <form className='auth-form__form' onSubmit={submitHandler}>
        {!isLogging && <div className="auth-form__input">
          <label htmlFor="pseudo" className="auth-form__label">pseudo</label>
          <input type="pseudo" name="pseudo" id="input-pseudo" ref={pseudoInputRef} className='input' />
        </div>}

        <div className='auth-form__input'>
          <label htmlFor="email" className="auth-form__label">email</label>
          <input type="email" name="email" id="input-email" ref={emailInputRef} className='input' />
        </div>

        <div className='auth-form__input'>
          <label htmlFor="password" className="auth-form__label">password</label>
          <input type="password" name="password" id="input-password" ref={passwordInputRef} className='input' />
        </div>

        {isLogging ? <Button name="connexion" marginClassName="auth-form__button" /> : <Button name="inscription" marginClassName="auth-form__button" />}
        {isLogging ? <span onClick={loggingHandler}>inscrivez-vous</span> : <span onClick={loggingHandler}>connectez-vous</span>}
        {isLoggedIn && <div>
        <strong>vous êtes connecté</strong>
                            <button className="auth__form__button" onClick={authCtx.logout}>se déconnecter</button>
                            </div>
        }
      </form>
    </div>
  )
}
