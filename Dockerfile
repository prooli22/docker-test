FROM arm32v6/node:8.14.0-alpine

# Adding source files into container
ADD src/ /src

# Define working directory
WORKDIR /src

# Install app dependencies
RUN npm install

# Open Port 5000
EXPOSE 5000

# Run Node.js
CMD ["npm", "start"]
