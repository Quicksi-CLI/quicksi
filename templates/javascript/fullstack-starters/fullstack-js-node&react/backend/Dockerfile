FROM node:lts-alpine AS install
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY src ./src
COPY test ./test
COPY config ./config
COPY .babelrc ./

FROM install AS dev
COPY nodemon.json ./
CMD ["npm", "run", "dev"]

# Run unit tests with code coverage before building release image:
FROM install AS test
CMD ["npm", "test"]

FROM install AS release
COPY src/app.swagger.yaml ./src/app.swagger.yaml
CMD ["npm", "start"]
