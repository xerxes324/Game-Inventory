const db = require("../db/queries")

exports.homepage = (req,res) => {
    console.log("welcome")
    res.render("homepage");
}

exports.searchGame = async(req,res)=>{
    console.log("hello world");
    
    if ( req.query.search.length > 0 ){
        const game = req.query.search;
        const displayCheck = await db.displayGameInfo(game);

        if ( displayCheck.length > 0 ){
            res.render("searchResults",{dc : displayCheck});
        }
        else{
            res.render("error");
        }
        
    }
}

exports.viewTable = async(req,res) => {
    const content = await db.inventory();
    res.render("table", {content : content});
}

exports.showGames = async(req,res)=>{
    const games = await db.getGames();
    res.render("games", {gamename : games});
}

exports.showDevelopers = async(req,res) => {
    const devs = await db.getDevs();
    res.render("developers", {dev : devs});
}

exports.showGenres = async(req,res) => {
    const gen = await db.getGenres();
    res.render("genres", {genre: gen});
}

exports.edit = async(req,res) => {
    const game = req.query.gameName;
    const dev = req.query.devName;
    const gen = req.query.genreName;
    const id = req.query.id;

    await db.editRow(game,dev,gen,id);
    res.redirect("/tableList");
}

exports.addGame = async(req,res) => {
    const game = req.query.gameName;
    const dev = req.query.devName;
    const gen = req.query.genName;
    await db.addGame(game,dev,gen);
    res.redirect("/tableList");
}

exports.deleteGame = async(req,res) => {
    const id = req.body.id;
    await db.deleteRow(id);
    res.redirect("/tableList");
}