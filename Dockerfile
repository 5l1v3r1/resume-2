FROM nginx
COPY dist /usr/share/nginx/html
COPY assets /usr/share/nginx/html/assets/
EXPOSE 80
