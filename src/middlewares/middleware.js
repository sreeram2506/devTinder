
function middleware(req, res, next) {   
    console.log("Middleware executed");
    next();
}


module.exports = { middleware  };