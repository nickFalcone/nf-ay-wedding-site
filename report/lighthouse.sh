#!/bin/sh
. ~/.nvm/nvm.sh
nvm use 10.16.3
curl https://www.nickandalesa.com/sitemap.xml | \
grep -e 'loc' | sed -e 's/.*<loc>\(.*\)<\/loc>.*/\1/' > report/sites.txt
lighthouse-batch -f report/sites.txt
