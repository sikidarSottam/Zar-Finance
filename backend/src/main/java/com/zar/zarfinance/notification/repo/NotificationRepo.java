package com.zar.zarfinance.notification.repo;

import com.zar.zarfinance.notification.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;


public interface NotificationRepo extends JpaRepository<Notification, Long> {
}

