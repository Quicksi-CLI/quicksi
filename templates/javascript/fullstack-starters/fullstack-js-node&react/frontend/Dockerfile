FROM node:lts-alpine AS install
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY src ./src
COPY public ./public

FROM install AS dev
CMD ["npm", "run", "start"]

FROM install AS test
CMD ["npm", "run", "test"]

# FIXME: should be a reverse proxy (nginx, caddy etc.) that just delivers the static frontend
FROM install AS release
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-p", "3000", "-s", "build"]