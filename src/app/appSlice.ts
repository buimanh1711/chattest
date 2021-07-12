import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { JsxElement } from "typescript";

export interface BotBarsTabType {
  path: string;
  name: string;
  icon: string | ReactNode | JsxElement;
  badge?: {
    active: boolean;
    number?: number;
  }
}

export interface AuthStateType {
  botBars: Array<BotBarsTabType>;
  isLoading: boolean;
}

export interface BadgePayloadType {
  name: string;
  badge: {
    active: boolean;
    number?: number
  }
}


const initialState: AuthStateType = {
  isLoading: false,
  botBars: [
    {
      path: '/',
      name: 'Chat',
      icon: 'icon-f-comment',
      badge: {
        active: false,
        number: 0
      }
    },
    {
      path: '/articles',
      name: 'Articles',
      icon: 'icon-file-article',
      badge: {
        active: false,
        number: 0
      }
    },
    {
      path: '/scam',
      name: 'Scam',
      icon: 'icon-s-warning-e',
      badge: {
        active: false,
        number: 0
      }
    }
  ]
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    triggerBadge(state, action: PayloadAction<BadgePayloadType>) {
      const { badge, name } = action.payload;

      let index = state.botBars.findIndex((item: BotBarsTabType) => item.name === name)

      state.botBars[index] = {
        ...state.botBars[index],
        badge
      }
    }
  }
})

//export actions
export const appActions = appSlice.actions;

//reducer
const appReducer = appSlice.reducer;
export default appReducer;