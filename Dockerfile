FROM nginx

MAINTAINER Mikael Ganehag Brorsson <mikael.brorsson@gmail.com>

COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY images /usr/share/nginx/html/images
COPY index.html /usr/share/nginx/html

