# Stage 1: Build the Angular application
FROM node:18 as build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Angular application
RUN npm run build:ssr

# Stage 2: Setup the Node.js environment
FROM node:18 as production-stage

# Set working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install only production dependencies
#RUN npm install --only=production

# Copy the built Angular application from the build stage
COPY --from=build-stage /app/dist/onbowman-13 /app/dist/onbowman-13

# Copy the server file
COPY server.ts ./

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["node", "dist/onbowman-13/server/main.js"]
