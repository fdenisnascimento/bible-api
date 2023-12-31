FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

RUN npm run build

# remove source code
RUN rm -rf src
RUN rm -rf .prod.env
RUN rm -rf .dev.env


EXPOSE 3000
CMD [ "node", "dist/main" ]