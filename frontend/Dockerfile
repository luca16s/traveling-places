FROM node:slim@sha256:748df22c6319351a64617bdbfbb46f52739ccaf3f9793bc1af3bdc2a8ede984d AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN npm run build --prod

FROM nginx:alpine-slim@sha256:b947b2630c97622793113555e13332eec85bdc7a0ac6ab697159af78942bb856

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /etc/nginx/ssl
COPY ssl/nginx-selfsigned.crt /etc/nginx/ssl/nginx-selfsigned.crt
COPY ssl/nginx-selfsigned.key /etc/nginx/ssl/nginx-selfsigned.key

COPY --from=builder /app/dist/traveling-places/browser /usr/share/nginx/html

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
