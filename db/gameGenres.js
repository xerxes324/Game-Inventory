// junction table 

const {main} = require("./dbClient");
const SQL = 

`
CREATE TABLE IF NOT EXISTS game_genres (
    game_id INTEGER REFERENCES games(game_id),
    genre_id INTEGER REFERENCES genres(genre_id),
    PRIMARY KEY (game_id, genre_id)
);

INSERT INTO game_genres (game_id, genre_id)
VALUES
-- 1. Red Dead Redemption 2 → Action, Adventure, RPG
(1, 1),
(1, 2),
(1, 3),

-- 2. Elden Ring : RPG, Adventure, Action
(2, 3),
(2, 2),
(2, 1),

-- 3. Sekiro : RPG, Fighting, Action
(3, 3),
(3, 5),
(3, 1),

-- 4. The Witcher 3 : RPG, Adventure, Action
(4, 3),
(4, 2),
(4, 1),

-- 5. Cyberpunk 2077 : RPG, Action, Shooter, Adventure
(5, 3),
(5, 1),
(5, 4),
(5, 2),

-- 6. Assassin's Creed Valhalla : Action, Stealth, Adventure
(6, 1),
(6, 14),
(6, 2),

-- 7. Far Cry 6 : Shooter, Action, Adventure
(7, 4),
(7, 1),
(7, 2),

-- 8. The Legend of Zelda: Breath of the Wild : Adventure, Action, RPG
(8, 2),
(8, 1),
(8, 3),

-- 9. Super Mario Odyssey : Platformer, Adventure, Action
(9, 11),
(9, 2),
(9, 1),

-- 10. FIFA 23 : Sports, Action, Simulation
(10, 12),
(10, 1),
(10, 8),

-- 11. Battlefield 2042 : Shooter, Action, Strategy
(11, 4),
(11, 1),
(11, 7),

-- 12. The Elder Scrolls V: Skyrim : RPG, Adventure, Action
(12, 3),
(12, 2),
(12, 1),

-- 13. Fallout 4 : RPG, Shooter, Adventure
(13, 3),
(13, 4),
(13, 2),

-- 14. Half-Life: Alyx : Shooter, Action, Adventure
(14, 4),
(14, 1),
(14, 2),

-- 15. Portal 2 : Puzzle, Adventure, Action
(15, 9),
(15, 2),
(15, 1),

-- 16. Resident Evil Village : Horror, Action, Survival
(16, 10),
(16, 1),
(16, 15),

-- 17. Street Fighter V : Fighting, Action, Adventure
(17, 5),
(17, 1),
(17, 2),

-- 18. Final Fantasy VII Remake : RPG, Adventure, Action
(18, 3),
(18, 2),
(18, 1),

-- 19. Call of Duty: Modern Warfare : Shooter, Action, Fighting
(19, 4),
(19, 1),
(19, 5),

-- 20. Overwatch : Shooter, Action, Strategy
(20, 4),
(20, 1),
(20, 7);

`;
main(SQL);