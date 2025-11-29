
function middleware(req, res, next) {   
    console.log("Middleware executed");
    next();
}


function usermiddleware(req, res, next) {




module.exports = { middleware, usermiddleware, authmiddleware, logmiddleware, extraMiddleware, anotherMiddleware };