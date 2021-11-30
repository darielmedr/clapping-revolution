# Step 1: Build

FROM node:lts-alpine3.12 as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:prod

# Stage 2: Serving

FROM nginx:1.21.4-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY /resources/* /usr/share/nginx/resources/

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build-step /app/dist/revolucion-de-los-aplausos .
