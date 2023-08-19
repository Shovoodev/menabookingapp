import user from "../api/models/user.js";

export const register = async (req, res, next) =>{

    try {
        const newUser = new user({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        await newUser.save();
        res.status(200).send
    }
    catch(err){
            next(err);
    }
}