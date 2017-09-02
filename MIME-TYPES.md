# Supported MIME types

[Last updated: 2017-09-02]

Seems like
[Google Drive API settings](https://console.developers.google.com/apis/api/drive.googleapis.com/drive_sdk)
doesn't allow describing generalized MIME types like
`image/*`, `application/*` etc.

It also seems that it doesn't actually support
app association with file extensions.

Resources:
 * [Native Google Documents conversion](https://developers.google.com/drive/v3/web/integrate-open)

## Supported MIME types

### Native Google Documents

[Google Drive v2](https://developers.google.com/drive/v2/web/mime-types)


### Other types

## NGD conversion map

| Target format | Corresponding MIME type |
|--------------------------------------|:-------------------------|
| **Documents** | |
| HTML | text/html
| HTML (zipped) | application/zip
| Plain text | text/plain
| Rich text | application/rtf
| Open Office doc | application/vnd.oasis.opendocument.text
| PDF | application/pdf
| MS Word document | application/vnd.openxmlformats-officedocument.wordprocessingml.document
| EPUB | application/epub+zip
| **Spreadsheets** 	| |
| MS Excel | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
| Open Office sheet | application/x-vnd.oasis.opendocument.spreadsheet
| PDF | application/pdf
| CSV (first sheet only) | text/csv
| TSV (first sheet only) | text/tab-separated-values
| HTML (zipped) | application/zip
| **Drawings** | |
| JPEG | image/jpeg
| PNG | image/png
| SVG | image/svg+xml
| PDF | application/pdf
| **Presentations** | | 
| MS PowerPoint | application/vnd.openxmlformats-officedocument.presentationml.presentation
| Open Office presentation | application/vnd.oasis.opendocument.presentation
| PDF | application/pdf
| Plain text | text/plain
| **Apps Scripts** | |
| JSON | application/vnd.google-apps.script+json

The about resource contains additional information about available export format

## Collections for future reference

### Other MIME types collection


### Extensions

