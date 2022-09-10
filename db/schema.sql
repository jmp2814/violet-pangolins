DROP DATABASE IF EXISTS classManagement;
CREATE DATABASE classManagement;

USE classManagement;

CREATE TABLE teacher (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30)  
);

CREATE TABLE student (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  FOREIGN KEY (classroom_id)
  REFERENCES classroom(id)
);

CREATE TABLE classroom (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  className VARCHAR(30),  
  FOREIGN KEY (teacher_id)
  REFERENCES teacher(id)
  ON DELETE SET NULL
);