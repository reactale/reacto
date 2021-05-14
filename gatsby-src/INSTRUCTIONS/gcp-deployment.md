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


## Set proper CORS to GCP Bucket
Chrome cannot load fonts from GCP buckets, if CORS is not done

Set CORS on **reacto.reactale.com** bucket with the followig command

```
    gsutil cors set ./gatsby-src/Instructions/cors_gcp_bucket.json gs://reacto.reactale.com

    // or for dev
    gsutil cors set ./gatsby-src/Instructions/cors_gcp_bucket.json gs://reacto.reactale.site
```