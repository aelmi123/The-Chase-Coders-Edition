DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    score INT NOT NULL
);

INSERT INTO users (username, score)
VALUES
    ('peterlydev', 10),
    ('bethan98', 15),
    ('anwar', 18),
    ('anishakdeol', 30),
    ('saruThy', 15);
