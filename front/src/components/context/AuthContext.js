import React from 'react'
import { createContext, useState} from 'react'

//Création d'un objet récupérant la valeur initiale des données
const defaultValue = {
  token: "",
  userId: "",
  userIsLoggedIn: false,
  login: () => {},
  logout: () => {}
}

const AuthContext = createContext(defaultValue)

export const AuthContextProvider = (props) => {

  //Création du state  pour récupéré le token
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)

  //Fonction qui prend en charge l'objet lors de la conneion
  const loginHandler = (token, userId) => {
    setToken(token)
    setUserId(userId)
  }

  //Fonctio qui prend en charge l'objet lors de la déconnexion
  const logoutHandler = (token, userId) => {
    setToken(null)
    setUserId(null)
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
  }

  //Si l'utilisateur est connecté, il y a donc un token valide
  //Conversion decette valeur en booléen

  const userIsLoggedIn = !!token

const contextValue = {
  token: token,
  userId: userId,
  isLoggedIn: userIsLoggedIn,
  login: loginHandler,
  logout: logoutHandler
}

  return (
    <AuthContext.Provider value= {contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
