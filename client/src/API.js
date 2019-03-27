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
      alert(json.error)
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
      alert(json.error)
    }
  })
}

export default {
  signupSubmit,
  loginSubmit
}