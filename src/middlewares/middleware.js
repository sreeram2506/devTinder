
function middleware(req, res, next) {   
    console.log("Middleware executed");
    next();
}

function usermiddleware(req, res, next) {   
    console.log("User Middleware executed");
    next();
}



module.exports = { middleware, usermiddleware, authmiddleware, logmiddleware, extraMiddleware, anotherMiddleware };