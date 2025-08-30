const {Client} = require("pg");
require("dotenv").config();
const { main } = require("./dbClient");

const SQL = `
CREATE TABLE IF NOT EXISTS games (
    game_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    game_name VARCHAR(255),
    dev_id INTEGER REFERENCES developers(dev_id)
);

INSERT INTO games (game_name, dev_id) 
VALUES 
('Red Dead Redemption 2', 1),
('Elden Ring', 2),
('Sekiro', 2),
('The Witcher 3', 3),
('Cyberpunk 2077', 3),
('Assassin''s Creed Valhalla', 4),
('Far Cry 6', 4),
('The Legend of Zelda: Breath of the Wild', 5),
('Super Mario Odyssey', 5),
('FIFA 23', 6),
('Battlefield 2042', 6),
('The Elder Scrolls V: Skyrim', 7),
('Fallout 4', 7),
('Half-Life: Alyx', 8),
('Portal 2', 8),
('Resident Evil Village', 9),
('Street Fighter V', 9),
('Final Fantasy VII Remake', 10),
('Call of Duty: Modern Warfare', 11),
('Overwatch', 14);
`;

main(SQL);
