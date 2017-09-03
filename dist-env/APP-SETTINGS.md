# Application Settings

The tokens below are referred to in [README.md](README.md).

`[Bracketed pieces]` are reservations for future use.

Also check [Reference section](#reference) for related 
useful resources.

```text
DEV_EMAIL   = oleksiy.rudenko@gmail.com

APP_ID      = 768799796416
APP_NAME    = Link Manager for Google Drive
APP_NAME_SHORT =
              Drive Link Manager
APP_DOMAIN  = https://oleksiyrudenko.github.io
APP_ROOT    = https://oleksiyrudenko.github.io/gd-linkman/
APP_OPEN    = APP_ROOT/#!/link/{ids}

APP_DOC_PP  = APP_ROOT/#!/privacypolicy/
APP_DOC_TOS = APP_ROOT/#!/tos/

APP_DESCR_SHORT =
            Share export-and-download links for native Google documents and direct download links for other types.

APP_DESCR_CWS =
            When you share a link to a file located on Google Drive your vis-a-vis may face:
            * need to switch to a Google account in order to access native Google documents;
            * inability to access native Google documents when vis-a-vis has got no Google account;
            * take extra step to download other types of files as by default those are opened in a preview mode;
            * inability to access any file if access permissions aren't set properly.
            
            This tool will help you to improve your peers' experience when downloading files.
            
            You will also skip export-upload-share hassle for native Google documents with sharing direct export-and-download links.
            
            This tool diminishes quite a few otherwise unavoidable actions, but on scale it saves lots of efforts.
            Take care of your peers!
            
            P.S. The tool doesn't fetch files contents.

APP_DESCR_LONG =
            Native sharing of files from Google Drive offers opening native Google documents or preview mode for other types of files.
            This tool integrates with Google Drive and offers:
             * convert-and-download direct links for native Google documents
             * direct download links for other types of files
             [* create and manage short links]
             [* instant stats on shared links access]
             [* granting file view/download "anyone with the link" 
                access in a single click]
            The tool doesn't fetch files contents.

ICO_URL     = APP_ROOT + [dimensions.ext]
              - any image filename with dimensions specified
              - png? - means any image format
              - 120x120max - means max size of 120px x 120px
              Required ico dimensions:
              - web-site : favicon.ico
              - Google Drive UI Integration: png 256px, 128px, 64px, 32px, 16px

APP_OAUTH_SCOPES =
            https://www.googleapis.com/auth/userinfo.email
            https://www.googleapis.com/auth/userinfo.profile
            https://www.googleapis.com/auth/drive.install
            https://www.googleapis.com/auth/drive.file
            https://www.googleapis.com/auth/drive.metadata
            https://www.googleapis.com/auth/drive
            
APP_CWS_URL = https://chrome.google.com/webstore/detail/njfcealcnfjoabcpmpjlefboocmlkeae
```

## Reference

 * [App Open URL Tokens](https://developers.google.com/drive/v3/web/enable-sdk#open_url)
 * OAuth Scopes:
   - [Drive API v2 Auth](https://developers.google.com/drive/v2/web/about-auth)
   - [Drive API v3 Auth](https://developers.google.com/drive/v3/web/about-auth)
   - [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/googlescopes)
   - [OAuth 2.0 for Client-side Web Applications](https://developers.google.com/identity/protocols/OAuth2UserAgent)
 