import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
export interface AuthState {
  isLoggedIn: boolean;
  name: string;
  
}

const initialState: AuthState = {
  isLoggedIn: false,
  name:"",

};
export const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        login: (state) => { 
            state.isLoggedIn = true;
        },
        logout: (state) => { 
            state.isLoggedIn = false;
        },
      setName: (state, action: PayloadAction<string>) => { 
          console.log(action.payload)
            state.name = action.payload;
        }
    }
})

export const { login, logout,setName } = AuthSlice.actions;

export default AuthSlice.reducer;