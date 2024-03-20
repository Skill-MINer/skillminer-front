FROM node:20-alpine3.18 as development

WORKDIR /app

EXPOSE 4200

RUN npm install -g @angular/cli

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci

COPY . /app
CMD npm start

FROM development AS builder

RUN ng build --prod

FROM development AS dev-envs
RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF

COPY --from=gloursdocker/docker / /

FROM nginx:alpine

COPY --from=builder /project/dist/skillminer-front /usr/share/nginx/html
