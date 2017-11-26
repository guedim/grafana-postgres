#!/bin/sh
echo creating dashboard
curl --user admin:foobar  -H 'Accept: application/json' -H 'Content-Type: application/json; charset=UTF-8' -X POST --data @datasource.js http://localhost:3000/api/datasources && curl --user admin:foobar  -H 'Accept: application/json' -H 'Content-Type: application/json; charset=UTF-8' -X POST --data @metrix-dashboard.js http://localhost:3000/api/dashboards/db
echo datasource created