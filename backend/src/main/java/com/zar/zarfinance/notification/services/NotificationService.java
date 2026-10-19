package com.zar.zarfinance.notification.services;

import com.zar.zarfinance.auth_users.entity.User;
import com.zar.zarfinance.notification.dtos.NotificationDTO;

public interface NotificationService {
    void sendEmail(NotificationDTO notificationDTO, User user);
}

