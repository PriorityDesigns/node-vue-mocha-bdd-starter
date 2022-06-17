#!/bin/bash

export NODE_ENV=test
cd ../app/client
npm run test:unit
