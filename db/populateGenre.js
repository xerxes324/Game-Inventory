const { Client } = require("pg");
require("dotenv").config();
const { main } = require("./dbClient");

const SQL = `
CREATE TABLE IF NOT EXISTS genres (
    genre_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    genre_name VARCHAR(255)
);

INSERT INTO genres (genre_name)
VALUES
('Action'),
('Adventure'),
('RPG'),
('Shooter'),
('Fighting'),
('Racing'),
('Strategy'),
('Simulation'),
('Puzzle'),
('Horror'),
('Platformer'),
('Sports'),
('MMO'),
('Stealth'),
('Survival'),
('Visual Novel'),
('Music'),
('Party'),
('Educational'),
('Sandbox');
`;

main(SQL);