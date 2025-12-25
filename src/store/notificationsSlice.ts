import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { NotificationItem } from "@/types";

interface notificationsState {
  notificationsList: NotificationItem[];
}

const initialState: notificationsState = {
  notificationsList: [
    {
      text: "First Notification",
      id: "abc1",
      read: false,
    },
    {
      text: "Second Notification",
      id: "abc2",
      read: false,
    },
    {
      text: "Third Notification",
      id: "abc3",
      read: false,
    },
  ],
};

export const notificationsSlice = createSlice({
  name: "notifications",

  initialState,
  reducers: {
    markAsRead: (state, action: PayloadAction<string>) => {
      const notificationIdToMark = action.payload;
      const notificationToUpdate = state.notificationsList.find(
        (notification) => notification.id === notificationIdToMark
      );
      if (notificationToUpdate) {
        notificationToUpdate.read = !notificationToUpdate.read;
      }
    },
  },
});

export const { markAsRead } = notificationsSlice.actions;

export const selectNotifications = (state: RootState) => {
  return state.notifications.notificationsList;
};

export const selectUnreadNotificationsCount = (state: RootState) => {
  const unreadNotifications = state.notifications.notificationsList.filter(
    (item) => {
      return !item.read;
    }
  );

  return unreadNotifications.length;
};
export default notificationsSlice.reducer;
