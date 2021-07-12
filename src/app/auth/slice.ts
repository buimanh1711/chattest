import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../models/UserInterfaces";

export interface AuthStateType {
  isLogged: false | true;
  isLogging: false | true;
  userInfo: UserType;
}


export interface LoginPayloadType {
  username: string;
  password: string;
}

const initialState: AuthStateType = {
  isLogged: false,
  isLogging: false,
  userInfo: {
    id: undefined,
    fullname: undefined,
    username: undefined,
    image: undefined
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLogging = true;
    },

    loginSuccess(state, action: PayloadAction<UserType>) {
      state.userInfo = action.payload;
      state.isLogging = false;
    },

    loginFailed(state) {
      state.isLogging = false;
    },

    logout(state) {
      state.isLogged = false;
    }
  }
})

//export actions
export const authActions = authSlice.actions;

//reducer
const authReducer = authSlice.reducer;
export default authReducer;