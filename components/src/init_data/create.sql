

CREATE TABLE mountains(
    resort_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    skill_level SMALLINT,
    preference VARCHAR(15) NOT NULL,
    mode_trans VARCHAR(30) NOT NULL,
    degree VARCHAR(15) NOT NULL
);