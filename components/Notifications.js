import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Stack, Typography } from "@mui/material";

import React from 'react'

const Notifications = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <BookOutlinedIcon style={{ width: 32, height: 32 }} />
      <NotificationsNoneOutlinedIcon style={{ width: 32, height: 32 }} />
      <MarkEmailUnreadOutlinedIcon style={{ width: 32, height: 32 }} />
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Person2OutlinedIcon style={{ width: 32, height: 32 }} />
        <Typography noWrap>Log In</Typography>
      </Stack>
    </Stack>
  );
}

export default Notifications