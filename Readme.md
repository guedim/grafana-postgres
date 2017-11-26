# docker-grafana-postgres

This is a simple project to install, and configure [Grafana](http://grafana.com) using [PostgreSQL](https://www.postgresql.org) as datasource

> This is a simple project using docker.

# Table of contents
1. [Install](#install)
2. [Configuration](#configuration)
3. [Monitoring](#monitoring)
4. [References](#references)


### Install services<a name="install"></a>

Download the [docker-compose](https://docs.docker.com/compose/) file:

```sh
wget https://raw.githubusercontent.com/guedim/grafana-postgres/master/docker-compose.yml
```

Later, start the services ([Grafana](http://grafana.com) and [Postgresql](https://www.postgresql.org) services using [docker-compose](https://docs.docker.com/compose/) file:
```sh
docker-compose up
```

### Configuration<a name="configuration"></a>

Temporal

Use the /grafana/dashboard files and create the datasource the sample dashboard:

```sh
docker ps
docker exec -it GRAFANA_ID_CONTAINER  bash
./etc/extra-config/grafana/post.sh
```


### Monitoring<a name="monitoring"></a>

For Monitoring, enter to [Grafana](http://grafana.com) and review the Metrix dashboard.

> Open the Grafana service and user the next credentials: 
>  - **user:** admin
>  - **password:** foobar


### References<a name="references"></a>

* https://grafana.com
* http://docs.grafana.org/features/datasources/postgres/
* http://docs.grafana.org/http_api/dashboard/
* https://github.com/grafana/grafana-docker
