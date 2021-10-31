REM Define some environment variables
SET IMAGE_NAME="text-to-image-frontend"
SET BASE_DIR="%cd%"

REM Build the image based on the Dockerfile
docker build -t %IMAGE_NAME% -f Dockerfile.dev .

REM Run the container
docker run --rm --name %IMAGE_NAME% -ti ^
--mount type=bind,source=%BASE_DIR%,target=/app ^
-p 3000:3000 %IMAGE_NAME%
