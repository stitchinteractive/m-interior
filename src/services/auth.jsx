export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = (token, expiry) => {
    debugger
  if (token !== `invalid` && expiry !== `invalid`) {
    return setUser({
      token: token,
      expiry: expiry,
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