const pool = require("./pool");

async function displayGameInfo(game){
    const {rows} = await pool.query(
        `SELECT game_name,dev_name, genre_name from games g 
         JOIN developers d on g.dev_id = d.dev_id 
         JOIN game_genres junc ON
         g.game_id = junc.game_id 
         JOIN genres gn ON
         gn.genre_id = junc.genre_id
         WHERE game_name = $1 
        `, [game]
    );
    return rows;
}

async function inventory(){
    const {rows} = await pool.query(
        `
            SELECT game_name as Game, dev_name as Developer ,
            STRING_AGG(genre_name::text, ' , ') as Genre
            FROM games g
            JOIN developers d 
            ON g.dev_id = d.dev_id
            JOIN game_genres junc
            ON g.game_id = junc.game_id
            JOIN genres gn 
            ON gn.genre_id = junc.genre_id
            group by g.game_name , d.dev_name
            
        `
    )
    return rows;
}

async function getGames(){
    const {rows} = await pool.query(
        `
            SELECT game_name as Game from games;
        `
    )
    return rows;
}

async function getDevs(){
    const {rows} = await pool.query(
        `
            SELECT dev_name as Developers from developers;
        `
    )
    return rows;
}


async function getGenres(){
    const {rows} = await pool.query(
        `
            SELECT genre_name as Genre from genres;
        `
    )
    return rows;
}

module.exports = {displayGameInfo, inventory, getGames, getDevs, getGenres};