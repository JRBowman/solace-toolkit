# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM image-registry.openshift-image-registry.svc:5000/openshift/nodejs:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY src/ /usr/local/app/src
COPY package.json /usr/local/app
COPY tsconfig.app.json /usr/local/app
COPY tsconfig.json /usr/local/app
COPY angular.json /usr/local/app
COPY default.conf /usr/local/app
COPY karma.conf.js /usr/local/app
COPY package-lock.json /usr/local/app
COPY tsconfig.spec.json /usr/local/app


# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
#FROM registry.access.redhat.com/ubi8/nginx-120
FROM image-registry.openshift-image-registry.svc:5000/openshift/nginx-ocp:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/onbowman-13 /usr/share/nginx/html
COPY --from=build /usr/local/app/default.conf /etc/nginx/conf.d/default.conf

# Expose port 8080
EXPOSE 80
