
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

function logmiddleware(req, res, next) {   
    console.log("Log Middleware executed");
    next();
}

function extraMiddleware(req, res, next) {   
    console.log("Extra Middleware executed");
    next();
}

function anotherMiddleware(req, res, next) {   
    console.log("Another Middleware executed");
    next();


}

function finalMiddleware(req, res, next) {   
    console.log("Final Middleware executed");
    next();
}
module.exports = { middleware, usermiddleware, authmiddleware, logmiddleware, extraMiddleware, anotherMiddleware, finalMiddleware };