# Деплой приложения на сервер с использованием pm2

Стартеркит проекта по автоматизации деплоя фронтенда и бэкенда при помощи pm2 (pm2 deploy)

- IP адрес 51.250.40.206
- Frontend https://mesto-frontend.nomorepartiessbs.ru/
- Backend https://api.mesto-frontend.nomorepartiessbs.ru/

### процесс деплоя

- настроить `.env.deploy`
- выполнить `pm2 deploy ecosystem.config.js production setup`
- выполнить `pm2 deploy ecosystem.config.js production` после обновлений
