#!/bin/bash

echo "SERVER_URL :  $SERVER_URL"
echo "BUILD_ENV : $BUILD_ENV"

if [ "$BUILD_ENV" = "production" ]; then
    envsubst < ./src/environments/environment.prod.ts
elif [ "$BUILD_ENV" = "staging" ]; then
    envsubst < ./src/environments/environment.staging.ts
else 
   envsubst < ./src/environments/environment.ts
fi
