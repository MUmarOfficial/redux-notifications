import { configureStore } from "@reduxjs/toolkit";
import notificationsReducer from "./notificationsSlice";

export const store = configureStore({
  reducer: {
    notifications: notificationsReducer, // Corrected import name
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
