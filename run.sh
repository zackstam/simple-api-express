docker build -t sample-app-api .
docker run -d -p 3000:3000 sample-app-api
docker ps -a