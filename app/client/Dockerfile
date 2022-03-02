FROM node:lts

COPY package.json /data/
WORKDIR /data/
RUN npm install
ENV PATH /data/node_modules/.bin:$PATH

COPY . /data/app/
WORKDIR /data/app/

# RUN npm install
CMD ["npm", "run", "serve", "--", "--port", "3000"]