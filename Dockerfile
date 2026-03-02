# Build stage
FROM node:18 AS build

WORKDIR /singh_sauravdeep_ui_garden

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine

WORKDIR /singh_sauravdeep_ui_garden

COPY --from=build /singh_sauravdeep_ui_garden/build /usr/share/nginx/html

EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]
