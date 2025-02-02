FROM node:18

WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Clean npm cache and clear possible faulty node_modules
RUN npm cache clean --force
RUN rm -rf node_modules
RUN rm -f package-lock.json

# Install dependencies, ignoring peer dependency issues
RUN npm install

# Copy project files
COPY . .

# Build the application with the production configuration
RUN npm run build

# Expose the port the app runs on
EXPOSE 4200

# Start the application
CMD ["npm", "start", "--", "--no-hmr"]