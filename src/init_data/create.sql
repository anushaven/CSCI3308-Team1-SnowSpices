CREATE TABLE mountains(
    resort_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    skill_level SMALLINT NOT NULL,
    preference VARCHAR(15) NOT NULL,
    mode_trans VARCHAR(30) NOT NULL
    
);

CREATE TABLE tags(
    level SMALLINT NOT NULL,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    ski_or_board VARCHAR(30) NOT NULL
);

CREATE TABLE users(
    username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(60) NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(200) NOT NULL
);