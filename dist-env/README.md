# App for Google Drive Publication workflow

## Contents
 * [Assets Storage Subdirectories Structure](#assets-storage-subdirectories-structure)
 * [Developer's Console](#developers-console)
 * [Chrome Web Store](#chrome-web-store)

## Assets Storage Subdirectories Structure
Assets
```text
--- cws                  - assets for Chrome Web Store
 |  |--- app-manifest    - App Manifest Pack
 |  \--- app-promo       - App Promo assets
 |
 \- src                  - assets source
    |--- cws             - for Chrome Web Store
    |    \--- app-promo  - for App Promo
    \--- ico-set         - icon set
```

## Integration and Publication

This section describes settings and workflow required to integrate
the app into google ecosystem and publish it with Chrome Web Store (CWS).

### Definitions

Some bits of information are used at multiple location therefore we
define here "variables" that will be referred to in the following sections.

The particular URLs are specific to this app.

```text
DEV_EMAIL   = oleksiy.rudenko@gmail.com

APP_NAME    = Link Manager for Google Drive
APP_DOMAIN  = https://oleksiyrudenko.github.io
APP_ROOT    = https://oleksiyrudenko.github.io/gd-linkman/

APP_DOC_PP  = APP_ROOT/#!/privacypolicy/
APP_DOC_TOS = APP_ROOT/#!/tos/

ICO_URL     = APP_ROOT + [dimensions.ext]
              - any image filename with dimensions specified
              - png? - means any image format
              - 120x120max - means max size of 120px x 120px

```

### Distribution

Make your app available at `APP_ROOT` (app default entry point).

### Developer's Console

Navigate to [Google Dev Console](https://console.developers.google.com/apis/dashboard)
 * Tap Button or Dropdown next to `Google APIs` logo and add a project

Go to Credentials and:
 * Create OAuth Client ID:
   - Name: `APP_NAME`
   - Authorized JS origins: `APP_DOMAIN`, `https://apis.google.com`
   - Authorized redirect URIs: `APP_ROOT`
 * OAuth Consent Screen:
   - use `DEV_EMAIL`, `APP_NAME`, `APP_ROOT`
   - logo URL: `ICO_URL/120x120max.png?`
 * Domain verification
   - [Verify domain](https://support.google.com/webmasters/answer/35179?hl=en)
     the app hosted at
   - Add verified domain `APP_DOMAIN`

 * Enable APIs `Google Drive API` and `Google Apps Marketplace SDK`
   (check sections below for details)
 *


### Chrome Web Store

