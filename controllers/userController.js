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
        // res.send(displayCheck);
        console.log(displayCheck.length);

        if ( displayCheck.length > 0 ){
            res.render("searchResults",{dc : displayCheck});
        }
        else{
            res.send("Game Not Found")
        }
        
    }
    // else{
    //    res.send("enter something atleast man");
    // }
}

exports.viewTable = async(req,res) => {
    const content = await db.inventory();
    // console.log(content.length, "is the length");
    // console.log(content, "is the content");
    res.render("table", {content : content});
}

exports.showGames = async(req,res)=>{
    const games = await db.getGames();
    console.log(games, 'is the games');
    res.render("games", {gamename : games});
}

exports.showDevelopers = async(req,res) => {
    const devs = await db.getDevs();
    console.log(devs, 'is the dev');
    res.render("developers", {dev : devs});
}

exports.showGenres = async(req,res) => {
    const gen = await db.getGenres();
    console.log(gen);
    res.render("genres", {genre: gen});
}

exports.edit = async(req,res) => {
    const game = req.query.gameName;
    const dev = req.query.devName;
    const gen = req.query.genreName;
    const id = req.query.id;
    // console.log(game, dev, gen, id , "are the four.");  
    

    // const content = await db.inventory();
    // res.render("table", {content : content});
}

exports.addGame = async(req,res) => {
    const game = req.query.gameName;
    const dev = req.query.devName;
    const gen = req.query.genName;
    // console.log(game, dev, gen);
    await db.addGame(game,dev,gen);

    const content = await db.inventory();
    console.log("the content is, " ,content);
    res.render("table", {content: content});
}