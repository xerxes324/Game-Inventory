const { main } = require("./dbClient");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS developers(
    dev_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    dev_name VARCHAR(255)
);

INSERT INTO developers (dev_name)
VALUES
('Rockstar'),
('FromSoftware'),
('CD Projekt Red'),
('Ubisoft'),
('Nintendo'),
('Electronic Arts'),
('Bethesda'),
('Valve'),
('Capcom'),
('Square Enix'),
('Activision'),
('Bandai Namco'),
('Epic Games'),
('Blizzard'),
('Sega'),
('Konami'),
('Sony Interactive Entertainment'),
('Microsoft Studios'),
('Insomniac Games'),
('BioWare');
`;

main(SQL);
