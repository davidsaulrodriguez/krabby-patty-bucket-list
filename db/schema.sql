DROP DATABASE IF EXISTS krabbyPatty_db;

CREATE DATABASE krabbyPatty_db;

USE krabbyPatty_db;

CREATE TABLE patties (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);