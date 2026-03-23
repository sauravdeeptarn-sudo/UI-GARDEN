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

# Stage 1: Build the React + TypeScript component library
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Run lint and tests before building
RUN npm run lint
RUN npm test -- --watchAll=false

# Build production app
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy build output
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 8018
EXPOSE 8018

# Start nginx
CMD ["nginx", "-g", "daemon off;"]S
