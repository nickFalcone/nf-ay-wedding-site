#!/bin/sh
. ~/.nvm/nvm.sh
nvm use 10.16.3 && lighthouse-batch -f report/sites.txt