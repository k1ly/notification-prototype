import { Expo } from 'expo-server-sdk';

export async function sendNotification() {
  const expo = new Expo();

  const pushTokens = [
    process.env.TOKEN1,
    process.env.TOKEN2,
    process.env.TOKEN3,
  ];
  
  pushTokens.forEach(async (pushToken) => {
    if (!Expo.isExpoPushToken(pushToken)) {
      console.error('Неверный формат токена уведомления');
      return;
    }

    try {
      await expo.sendPushNotificationsAsync([
        {
          to: pushToken,
          sound: 'default',
          title: 'Test!',
          body: 'This is notification from Expo Server SDK!',
        },
      ]);
      console.log('Уведомление успешно отправлено');
    } catch (error) {
      console.error('Ошибка отправки уведомления:', error);
    }
  });
}
