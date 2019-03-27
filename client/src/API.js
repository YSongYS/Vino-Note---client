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

export default {
  signupSubmit,
  loginSubmit,
  userUpdate,
  getUserInfo
}