
import Client from './Api'
export const SignInUser = async (data) => {
  try {
    const res = await Client.post('auth/login', data)
    localStorage.setItem('token', res.data.token)
    let userId = res.data.user.id
    localStorage.setItem('id', userId)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateProfile = async (userId, formState) => {
  try {
    await Client.put(`/user/${userId}`, formState)
  } catch (error) {
    throw error
  }
}

export const deleteProfile = async (userId) => {
  try {
    await Client.delete(`/user/${userId}`)
  } catch (error) {
    throw error
  }
}

export const createPost = async (formState) => {
  try {
    await Client.post(`/trips/create`, formState)
  } catch (error) {}
}


export const deleteTrip = async (tripId) => {
  try {
    await Client.delete(`/trips/${tripId}`)
  } catch (error) {
    throw error
  }
}

export const updateTrip = async (tripId, data ) => {
  try {
    const res = await Client.put(`/trips/${tripId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
