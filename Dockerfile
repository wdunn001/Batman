FROM socialengine/nginx-spa:latest
COPY dist/dvm-tools /app
EXPOSE 80
