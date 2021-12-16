export const BASE_URL = 'https://auth.nomoreparties.co'; 

const _checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export const register = (name, email, password) => { 
  return fetch(`${BASE_URL}/signup`, { 
    method: 'POST', 
    headers: { 
      'Content-Type': 'application/json' 
    }, 
    body: JSON.stringify({ 
      'name': name,
      'password': password, 
      'email': email 
    }) 
  })
  .then(_checkResponse);
}

export const login = (email, password) => { 
  return fetch(`${BASE_URL}/signin`, { 
    method: 'POST', 
    headers: { 
      'Content-Type': 'application/json' 
    }, 
    body: JSON.stringify({ 
      'password': password, 
      'email': email 
    }) 
  }) 
  .then(_checkResponse) 
  .then((data) => { 
    if (data){ 
      localStorage.setItem('jwt', data.token); 
      return data; 
    }  
  })
}
 
export const checkToken = (token) => { 
  return fetch(`${BASE_URL}/users/me`, { 
    method: 'GET', 
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${token}`, 
    }
  }) 
  .then(_checkResponse)
};
