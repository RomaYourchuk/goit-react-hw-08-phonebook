import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * Після успішного логіна добавляємо токен в HTTP-заголовок
 */
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('Error during creating user', error);
    // TODO: добавити обробку помилки error.message
  }
});

/*
 * POST @ /users/login
 * body: { email, password }
 * Після успішного логіна добавляємо токен в HTTP-заголовок
 */
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('Error during login in user', error);
    // TODO: добавити обробку помилки error.message
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * Після успішного логаута, удаляємо токен з HTTP-заголовка
 */
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log('Error during log out user', error);
    // TODO: добавити обробку помилки error.message
  }
});
/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираєм токен з стейта через getState()
 * 2. Якщо токена немає, виходим не виконуючи никаких операций
 * 3. Якщо токен є, добавляє його в HTTP-заголовок и виконує операцію
 */
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      // TODO: добавити обробку помилки error.message
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;