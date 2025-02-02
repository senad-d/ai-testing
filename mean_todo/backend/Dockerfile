FROM node:18

WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Clean npm cache and clear possible faulty node_modules
RUN npm cache clean --force
RUN rm -rf node_modules
RUN rm -f package-lock.json

# Install dependencies
RUN npm install

# Copy project files and the wait-for-mongo script
COPY . .
COPY wait-for-mongo.js .

# Expose the port the app runs on
EXPOSE 5000

# Start the application with MongoDB readiness check
CMD ["sh", "-c", "node wait-for-mongo.js && npm start"]