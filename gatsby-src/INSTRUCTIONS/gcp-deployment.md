# Copy the content ./gatsby-src/public folder to bucket

## Deploy Reacto Website
- Open gcp console
- Git clone the reacto codebase
- Copy content of `./gatsby-src/public/*` to bucket `gs://reacto.reactale.com`
    ```
    gsutil -m cp -r ./gatsby-src/public/* gs://reacto.reactale.com/
    
    // or for dev
    gsutil -m cp -r ./gatsby-src/public/* gs://reacto.reactale.site/
    ```