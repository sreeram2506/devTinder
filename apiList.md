# DevTinder APIs

authRouter
- POST /signup
- POST /login
- POST /logout

profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

connectionRequestRouter
- POST /request/send/interested/:userID
- POST /request/send/ignored/:userID
- POST /request/review/accepted/:requestID
- POST /request/review/rejected/:requestID

userRouter
- GET /user/connections
- GET /uer/requests
- GET /user/feed - Getsyou the profiles of other users on platform

Status: ignore, interested, accepted, rejected


