#!/bin/bash
cd "$(dirname "$0")"
node --env-file .env out/index.js "$@"
