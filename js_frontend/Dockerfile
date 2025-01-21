# Stage 1: Build app
FROM node:14-alpine AS build

WORKDIR /app
COPY package-docker.json package.json 

RUN npm install

COPY src/index.js ./src/index.js
COPY public ./public

# set env variables
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

# build app
RUN npm run build

# Stage 2: Setup Nginx for processing static files
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Copy builded app from previus stage
COPY --from=build /app/dist .

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
