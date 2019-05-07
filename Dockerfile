# Fetch node_modules for backend, nothing here except 
# the node_modules dir ends up in the final image
FROM node:8.14.0-alpine as builder
ENV PATH /src/node_modules/.bin:$PATH
ADD src/ /src
WORKDIR /src
RUN npm install
RUN npm list

# Add the files to arm image
FROM arm32v6/node:8.14.0-alpine
ADD src/ /src
WORKDIR /src
ENV PATH /src/node_modules/.bin:$PATH

COPY --from=builder /src/node_modules /src/node_modules

# Open Port 5000
ENV PORT=5000
EXPOSE 5000

# Run Node.js
CMD ["npm", "start"]
