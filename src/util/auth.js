import React, { useState, useEffect } from "react"

export const isBrowser = () => typeof window !== "undefined"


export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}


const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))


export const handleLogin = ({ username, password }) => {
  const [auth, setAuth] = useState(0)
  useEffect(() => {
    // get data from api
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username : username, password : password})
    };
    fetch(`https://9il287rnf8.execute-api.us-east-1.amazonaws.com/mvp/login/`, requestOptions)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setAuth(resultData)
      }) // set data into Auth
  }, [])

  if (auth.status === 1) {
    return setUser({
      token : auth.token
    })
  }
  return false
}



export const isLoggedIn = () => {
  const user = getUser()
  return !!user.token
}


export const logout = callback => {
  setUser({})
  callback()
}