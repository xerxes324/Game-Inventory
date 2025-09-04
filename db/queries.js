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
            SELECT g.game_id as ID , game_name as Game, dev_name as Developer ,
            STRING_AGG(genre_name::text, ' , ') as Genre
            FROM games g
            JOIN developers d 
            ON g.dev_id = d.dev_id
            JOIN game_genres junc
            ON g.game_id = junc.game_id
            JOIN genres gn 
            ON gn.genre_id = junc.genre_id
            group by g.game_name , d.dev_name, g.game_id
            ORDER by g.game_name;
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

async function addGame(game,dev,gen){

    const client = await pool.connect();

    try{
    
    await client.query('BEGIN');
    
    await client.query(
        `
        INSERT INTO developers (dev_name) 
        VALUES
        ($1)
        ON CONFLICT ( dev_name ) DO NOTHING;
        `,
        [dev]
    )
    

    await client.query(
        `
        INSERT into genres ( genre_name )
        VALUES
        ($1)
        ON CONFLICT ( genre_name ) DO NOTHING;
        `,
        [gen]
    )

    await client.query(
        `
        INSERT into games ( game_name, dev_id)
        VALUES
        ($1, (SELECT dev_id from developers where dev_name = $2))
        ON CONFLICT ( game_name ) do nothing;
        `,
        [game, dev]
    )

    await client.query(
        `
        INSERT INTO game_genres (game_id , genre_id) VALUES 
        ((SELECT game_id from games where game_name = $1),
        (SELECT genre_id from genres where genre_name = $2))
        ON CONFLICT do nothing;
        `,
        [game, gen]
    )
    await client.query('COMMIT');       
    console.log("Game added successfully");
    }//try close.

    catch(error){
        console.log("failed!");
        await client.query('ROLLBACK');
        throw error;
    }
    finally{
        client.release();
    }
    
}

async function editRow(game,dev,gen,id){


    await deleteRow(id);
    await addGame(game,dev,gen);
}


async function deleteRow(id){
    await pool.query(
        `
            DELETE FROM game_genres where game_id = $1
        `, [id]
    )

    await pool.query(
        `
            DELETE from games where game_id = $1
        `, [id]
    )
}

module.exports = {deleteRow,editRow, addGame, displayGameInfo, inventory, getGames, getDevs, getGenres};