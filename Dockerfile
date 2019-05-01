FROM arm32v7/node:latest

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
