DROP DATABASE IF EXISTS burgerDB;

CREATE DATABASE burgerDB;

USE burgerDB;

CREATE TABLE burgers (
	id INTEGER (20) NOT NULL AUTO_INCREMENT,
    name VARCHAR (100),
    eaten BOOL not null,
    PRIMARY KEY (id)
);