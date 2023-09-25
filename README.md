# express
Express template for reference


## steps and most used commands for this repo

# setup new npm package -y to skip all questions
- npm init -y  

# install express
- npm i express

# add node_modules to .gitignore

# create index.js file
- touch index.js

# install nodemon
- npm i nodemon
modify package.json file, add script: nodemon index.js

# run web-server
npm run start






[Views]
mkdir views
touch home.ejs


git push origin main

[web-server]
npm run start

[find ip address using ngrok]

terminal: 
-brew install ngrok/ngrok/ngrok
-ngrok config add-authtoken <token>, token from ngrok dashboard
start a tunnel to your https:localhost:port
-ngrok http https://localhost:8080
visit provided link {to get your ip}

send your ip to ip2location.com to receive back location details
