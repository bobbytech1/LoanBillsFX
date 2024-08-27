import { useState, useEffect } from 'react';
import { router } from 'expo-router';

const useNotifications = () => {
    const [hasNewNotifications, setHasNewNotifications] = useState(true); // Hardcoded to true for now

    const handleNotificationClick = () => {
        // Navigate to the Notification Screen
        router.replace('/notifications');
        // Once the user visits the notification screen, set this to false
        setHasNewNotifications(false);
    };

    return {
        hasNewNotifications,
        handleNotificationClick
    };
};

export default useNotifications;
