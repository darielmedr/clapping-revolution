# Step 1: Build

FROM node:14.18-alpine3.12 as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run prerender

# Stage 2: Serving

FROM node:14.18-alpine3.12

RUN mkdir -p /app

WORKDIR /app

COPY --from=build-step /app/dist/revolucion-de-los-aplausos .

RUN npm install pm2 -g

ENV DIST="/app/browser"

ENV PORT=80

EXPOSE 80

CMD [ "pm2-runtime", "./server/main.js" ]
