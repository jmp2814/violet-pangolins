DROP DATABASE IF EXISTS classManagement;

CREATE DATABASE classManagement;

USE classManagement;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL, 
  PRIMARY KEY (id)
);

CREATE TABLE classroom (
  id INT NOT NULL AUTO_INCREMENT,
  className VARCHAR(30), 
  user_id INT DEFAULT NULL,
  FOREIGN KEY (user_id)
  REFERENCES user(id)
  ON DELETE SET NULL, 
  PRIMARY KEY (id)
);

CREATE TABLE student (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  classroom_id INT DEFAULT NULL,
  PRIMARY KEY (id), 
  FOREIGN KEY (classroom_id)
	REFERENCES classroom(id)
);