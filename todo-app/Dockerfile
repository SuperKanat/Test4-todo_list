# Base image
FROM node:14

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# Copy source files
COPY . .

# Build the app
RUN yarn build

# Start the app
CMD ["yarn", "start"]
