const userDao = require("../daos/users-dao")

module.exports = (app) => {

    const register = (req, res) => {
        const credentials = req.body;
        // dao returns a promise
        // find out if user exist, then we can register
        userDao.findUserByUsername(credentials.username)
            .then((actualUser) => {
                if(actualUser.length > 0) {
                    // string 0, there is a user
                    // client knows what to check for
                    res.send("0")
                } else {
                    // user is not there
                    userDao.createUser(credentials)
                        .then((newUser) => {
                            req.session['profile'] = newUser
                            res.send(newUser)
                        })
                }
            })
    }

    const login = (req, res) => {
        const credentials = req.body;
        userDao.findUserByCredentials(credentials)
            .then((actualUser) => {
                if(actualUser) {
                    req.session['profile'] = actualUser
                    res.send(actualUser)
                } else {
                    res.send("0")
                }
            })
    }
    const logout = (req, res) => {
        // req.session.destroy();
    }

    const profile = (req, res) => {
        const currentUser = req.session["profile"]
        res.send(currentUser)
    }

    app.post("/api/users/profile", profile);
    app.post("/api/users/register", register);
    app.post("/api/users/login", login);
    app.post("/api/users/logout", logout);
}