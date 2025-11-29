
function middleware(req, res, next) {   
    console.log("Middleware executed");
    next();
}

function usermiddleware(req, res, next) {   
    console.log("User Middleware executed");
    next();
}

function authmiddleware(req, res, next) {   
    console.log("Auth Middleware executed");
    next();
}
module.exports = { middleware, usermiddleware };