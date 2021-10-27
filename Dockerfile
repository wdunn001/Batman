FROM socialengine/nginx-spa:latest
COPY dist/batman /app
EXPOSE 80
