docker build -t sample-app-api .
docker run -d -p 8080:3000 sample-app-api
docker ps -a