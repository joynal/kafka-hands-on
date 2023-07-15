# Kafka hands on code

### Pre-requisites

* Docker or you can setup kafka on your own
* Nodejs >= 18.12.0.

### Bootstrap kafka

The provided docker compose file offers a easy quick setup for Kafka.

```
docker-compose up -d
```

### Create topics

To utilize the following commands, please download Kafka from official website to your local machine and navigate to
the `bin` directory.

```
./kafka-topics.sh --create --bootstrap-server 127.0.0.1:9094 --replication-factor 1 --partitions 4 --topic visitor-queue
```

Created topics can be easily listed by running following command.

```
./kafka-topics.sh --list --bootstrap-server 127.0.0.1:9094
```
