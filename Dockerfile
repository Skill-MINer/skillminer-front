FROM node:20-alpine3.18 as development

WORKDIR /app

EXPOSE 4200

RUN npm install -g pnpm

RUN npm install -g @angular/cli

COPY package.json /app/package.json
COPY pnpm-lock.yaml /app/pnpm-lock.yaml
RUN pnpm i

COPY . /app
CMD pnpm local --host 0.0.0.0 --poll 20