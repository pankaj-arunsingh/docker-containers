### useful docker-compose commands

`docker-compose up` to build and run the application
`docker-compose up --build` to rebuild the application
`docker-compose up -d` to run the application in background where -d means detached
`docker-compose down` to close the application
`docker-compose -f docker-compose.dev.yml up` to specify a file to run the Docker Compose command
`docker-compose -f docker-compose.dev.yml logs -f` to view the output logs where -f ensures we follow the logs
`docker-compose -f docker-compose.dev.yml down --volumes`to ensure that nothing is left

### useful docker commands

`docker build -t todo-frontend` to build container with name todo-frontend
`docker run -p 8080:80 todo-frontend` to run the container with name todo-frontend on port 8080
