const url = 'http://localhost:3000'

const signupSubmit = (event, data) => {
  event.preventDefault()
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ user: data })
  }
  return fetch(`${url}/users`, options)
  .then(res => res.json())
  .then(json => {
    if (json.user) {
      localStorage.setItem('token', json.jwt)
      localStorage.setItem('user_id', json.user.id)
    } else {
      alert("We've got error")
    }
  })
}

const loginSubmit = (event, data) => {
  event.preventDefault()
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ user: data })
  }
  return fetch(`${url}/login`, options)
  .then(res => res.json())
  .then(json => {
    if (json.user) {
      localStorage.setItem('token', json.jwt)
      localStorage.setItem('user_id', json.user.id)
    } else {
      alert("We've got error")
    }
  })
}

const getAllLogs = (userId) => {
  const url_used = `${url}/users/${userId}/logs`
  return fetch(url_used,{
    method:'GET',
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then(res => res.json())}

const simpleShowFetch = (model, modelId) => {
  const url_used = `${url}/${model}s/${modelId}`
  return fetch(url_used,{
    method:'GET',
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then(res => res.json())}

const userUpdate = (event, data) => {
  event.preventDefault()
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.token
    },
    body: JSON.stringify({ user: data })
  }
  return fetch(`${url}/users/${data.id}`, options)
  .then(() => alert('Updated! ^0^'))
}

const getUserInfo = () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.token
    }
  }
  return fetch(`${url}/profile`, options)
  .then(res => res.json())
}

const createWine = (wineInfo) => {
  const options = {
      method: "POST",
      headers: {"Content-Type": "application/json", Accept: "application/json", Authorization: localStorage.token},
      body: JSON.stringify(wineInfo)
    }
  const url_used = `${url}/wines`
  return fetch(url_used, options)
    .then(res => res.json())}

const findLook = (lookInfo) => {
  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json", Accept: "application/json", Authorization: localStorage.token},
    body: JSON.stringify(lookInfo)
  }
  const url_used = `${url}/looks`
  return fetch(url_used, options)
    .then(res => res.json())
}

const findTaste = (tasteInfo) => {
  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json", Accept: "application/json", Authorization: localStorage.token},
    body: JSON.stringify(tasteInfo)
  }
  const url_used = `${url}/tastes`
  return fetch(url_used, options)
    .then(res => res.json())
}

const createSmell = (smellInfo) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.token
    },
    body: JSON.stringify(smellInfo)
  }
  return fetch(`${url}/smells`, options)
  .then(res => res.json())
}

const createLog = (logInfo) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.token
    },
    body: JSON.stringify(logInfo)
  }
  return fetch(`${url}/logs`, options)
  .then(res => res.json())
}

const updateLog = (logInfo) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.token
    },
    body: JSON.stringify({logInfo})
  }
  return fetch(`${url}/logs/${logInfo.id}`, options)
}

export default {
  signupSubmit,
  loginSubmit,
  getAllLogs,
  simpleShowFetch,
  userUpdate,
  getUserInfo,
  createWine,
  findLook,
  findTaste,
  createSmell,
  createLog,
  updateLog
}
