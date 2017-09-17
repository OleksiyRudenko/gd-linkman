# App for Google Drive Publication workflow

## Contents
 * [Assets Storage Subdirectories Structure](#assets-storage-subdirectories-structure)
 * [Developer's Console](#developers-console)
 * [Chrome Web Store](#chrome-web-store)

## Assets Storage Subdirectories Structure
Assets
```text
--- cws                  - assets for Chrome Web Store; images are taken from src/*
 |  |--- app-manifest    - App Manifest Pack
 |  \--- app-promo       - App Promo assets
 |
 \- src                  - assets source
    |--- cws             - for Chrome Web Store
    |    \--- app-promo  - for App Promo
    \--- ico-set         - icon set for web-site/app
         \--- extra      - extra icons for GAPI/CWS
```

## Integration and Publication

This section describes settings and workflow required to integrate
the app into google ecosystem and publish it with Chrome Web Store (CWS).

### Definitions

Some bits of information are used at multiple location therefore we
define here "variables" that will be referred to in the following sections.

The particular URLs are specific to this app.

Check [App Settings](APP-SETTINGS.md) for tokens referred to
in this document.

### Distribution

Make your app available at `APP_ROOT` (app default entry point).

### Developer's Console

Helpful docs:
 * [Apps Marketplace - Set Up the Project](https://developers.google.com/apps-marketplace/preparing)
 * Create a Chrome Web Store Listing:
   - [Drive API v2](https://developers.google.com/drive/v2/web/listing)
   - [Drive API v3](https://developers.google.com/drive/v3/web/listing)
 * [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/OAuth2)
 * [Google OAuth Playground](https://developers.google.com/oauthplayground/)
 * [Unofficial tutorial re G Suite for Businesses app](http://youdontneedacrm.tumblr.com/post/81479000201/tutorial-create-your-application-in-google-marketplace)

Navigate to [Google Dev Console](https://console.developers.google.com/apis/dashboard)
 * Tap Button or Dropdown next to `Google APIs` logo and add a project
 * Complete the form

Go to [Credentials](https://console.developers.google.com/apis/credentials) and:
 * Create OAuth Client ID:
   - Name: `APP_NAME`
   - Authorized JS origins: `APP_DOMAIN`, `https://apis.google.com`
   - Authorized redirect URIs: `APP_ROOT`
 * OAuth Consent Screen:
   - use `DEV_EMAIL`, `APP_NAME`, `APP_ROOT`
   - logo URL: `ICO_URL/120x120max.png?` (`ICO_URL/img/ico-cws-gapi-120x.png`)
 * Domain verification
   - [Verify domain](https://support.google.com/webmasters/answer/35179?hl=en)
     the app hosted at
   - Add verified domain `APP_DOMAIN`

Go to [Library](https://console.developers.google.com/apis/library)
 * Enable APIs:
   - `Google Drive API` (v2 at least)
   - `Google Apps Marketplace SDK`
   - `Google+ API`
   - `Contacts API`

Go to [Dashboard/Google Drive API/Drive UI Integration](https://console.developers.google.com/apis/api/drive.googleapis.com/drive_sdk)
 * Use `APP_NAME`, `APP_DESCR_SHORT`, `APP_DESCR_LONG`
 * Upload Application icons: 256px, 128px, 64px, 32px, 16px
 * Upload Document icons (if app can create/open specific doc type):
   256px, 128px, 64px, 32px, 16px
 * Drive Integration:
   - **do not** check `Automatically show OAuth 2.0 
     consent screen...` as it is not supported anymore
   - USE `APP_OPEN`
   - Default MIME types and extensions - that app can CREATE
   - Secondary MIME types and extensions - that app can OPEN.
     See [supported MIME-types](../MIME-TYPES.md) for details.
   - [ ] Creating files
   - [ ] Multiple file support
   - [x] Importing
   - [x] Mobile browser support
   - [x] Team Drives support
   
Go to [Dashboard/Google Apps Marketplace SDK/Configuration](https://console.developers.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk)
 * Complete Application info using `APP_NAME` and `APP_DESCR_SHORT`
 * [x] Enable individual install
 * Upload Application icons: 128px, 96px, 48px, 32px
 * Use `APP_DOC_TOS` and `APP_DOC_PP`
 * Complete the following if applicable:
   - Setup URL (Optional)
   - Admin config URL (Optional)
   - Support URL (Optional)
   - Deletion policy URL (Optional)
 * Populate OAuth 2.0 scopes from `APP_OAUTH_SCOPES`
 * Extensions
   - [ ] Universal navigation extension 
   - [x] Drive extension
   - [ ] Gmail contextual gadget extension
 * Add-on extensions
   - [ ] Docs add-on extension
   - [ ] Sheets add-on extension
   - [ ] Forms add-on extension 
 
### Chrome Web Store

Go to [CWS Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard)

> [CWS Publishing Guidelines](https://developer.chrome.com/webstore/publish?hl=en-US#step2)

At **Developer account** section complete at least:
 * Developer display name
 * Link to developer's privacy policy
 * Tester accounts (e.g. your own email) to test installation and operation

#### App Manifest
Prepare [App Manifest pack](cws/app-manifest/) using icons and other
relevant app data, and have it zipped.

Note `container` section of `manifest.json`:
 * `"GOOGLE_DRIVE"` - allows Google Drive integration
 * `["DOMAIN_INSTALLABLE", "GOOGLE_DRIVE"],` - also 
   allows Google for Business admins add the app to their domains
   internal listing

#### App Imagery
Prepare required imagery:
 * [CWS](https://developer.chrome.com/webstore/images?hl=en-US#promo)
 * [Branding Drive apps](https://developers.google.com/drive/v3/web/branding)
 * [CWS Branding guidelines](https://developer.chrome.com/webstore/branding)
 * [Listing the app](https://developers.google.com/apps-marketplace/listing)

#### Put App on Listing
Add new item and:
 * Upload zipped App manifest pack
 * Use `APP_DESCR_CWS`
 * Use 128x128 transparent background icon where visual part is:
   - 112x112 if round
   - 96x96 otherwise
 * Add [illustrations](cws/app-promo):
   - 1280x800 or 640x400 screenshots
   - link to a video on youtube
   - 440x280 and optionally 920x680 promo tile
   - optional 1440x560 promo marquee
 * Websites:
   - choose one of your verified web-sites
   - NON-INSTALLATION link to the app
   - optional FAQ and Support link
 * Choose category (Office Applications)
 * Keep the app free
 * Choose regions
 * Skip Google Play for Education
 * Inline install -?
 * Add Google Analytics id if applicable
 * Visibility options:
   - private for test purposes
   - public when ready to roll out
 
 **Preview** listing and note CWS Url:
 
 `https://chrome.google.com/webstore/detail/njfcealcnfjoabcpmpjlefboocmlkeae/preview?hl=en-US&gl=UA`
  
 Remove trailing `/preview...`.
 This the direct link to your app listing at CWS.
 Use it to distribute app among testers.
 
 **Publish** for to changes take effect.