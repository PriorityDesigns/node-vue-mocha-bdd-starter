#!/bin/bash

export NODE_ENV=dev
export NODE_TLS_REJECT_UNAUTHORIZED=0
cd ../app/client
npm run serve -- --port 3000
