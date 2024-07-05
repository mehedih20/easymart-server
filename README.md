## EasyMart | Get all you need in one place!

- EasyMart is an ecommerce website where one can purchase different products according to their need. Comprehensive dashboard services for different user roles.

### Client side

- [Live link](https://easymart-e9ec7.web.app)
- [Github link](https://github.com/mehedih20/easymart-client)

### Server side

- [Live link](https://easy-mart-server-sandy.vercel.app)

### Features

- User creation
- User role management
- Role specific data authorization
- Product management
- Cart and Order management
- Fully authorized api calls

### Technologies

- Typescript
- Mongoose
- Mongodb
- ExpressJs
- Json web token
- Others

### How to run the app locally

1. Download the project from github

2. If nodeJs is not installed then install it

3. Open the project with any code editor

4. Open a terminal in the project folder and run "npm install". The following command will install all the listed dependencies in the package.json file, needed for the application to run smoothly.

5. Now when the dependencies are installed, create a .env file and inside the file declare the following environment variables:

   - NODE_ENV: Eg. development
   - PORT: Host port. Eg. 5000
   - DATABASE_URL: Mongodb configuration string having the username,password,collection name
   - DB_USER : Database user
   - DB_PASS : Database user password
   - BCRYPT_SALT_ROUNDS : Salt rounds needed for bcrypt

6. Build the typescript code

   - npm run build: it will invoke the tsc command needed for building ts files

7. Now that the typescript code is done building, we can run the application

   - npm run start:dev : this command will run tsc-node-dev which will keep the app running and automatically restart on any change in the code. This is helpful while development.

   - npm run start:prod : this will run the javascript server file with node.

   - node ./dist/server.js : if you want to directly use node to run the server file

8. Finally when the app in running on localhost, api calls can be made
