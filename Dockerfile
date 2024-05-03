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

FROM development AS builder

RUN pnpm start

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
