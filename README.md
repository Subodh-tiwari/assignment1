CRUD and search api
-----------

API for performing crud and search operations

Written in TypeScript

Prerequisites:
  * Environment Variables
    - DB_HOST        # DB host name
    - DB_NAME        # DB name
    - DB_USER         # DB user
    - DB_PASSWORD      # DB password

Setup
-----

  **TABLE STRUCTURE**
  create table car (id serial Primary key, make varchar(255) NOT NULL, model varchar(255) NOT NULL, year varchar(255) NOT NULL, created_at timestamp without time zone default NOW(), updated_at timestamp without time zone default NOW());

  **For running**

    npm install
    npm run dev

  **API info**
  http://localhost:3000/documentation
