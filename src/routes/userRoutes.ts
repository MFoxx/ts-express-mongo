// Import dependencies
import {Request, Router, Response} from 'express';
const router = Router();

// Import models
import userModel from '../models/userModel';

// Create user router
router.post('/create-user', (req: Request, res: Response) => {
    const data = new userModel({
        name: req.body.name,
        age: req.body.age,
        log: ['User Created'],
        adult: req.body.age > 18 ? true : false
    })

    try {
        data.save().then(() => console.log('Data saved', data));
        res.send({'Data saved': data}).status(200)
    } catch (error) {
        res.send({'There was an error:': error}).status(500);
        console.log(error);
    }
})

router.get('/users', async (req: Request, res: Response) => {
    const user: Array<Object> = await userModel.find();

    res.send(user);
})

router.post('/edit-user/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = await userModel.findOneAndUpdate({_id: id}, req.body, {new: true});

    res.send(user);
})

router.post('/delete-user/:id', async(req: Request, res: Response) => {
    const user = await userModel.findOneAndDelete({_id: req.params.id})

    res.send({'User deleted:': user});
})

export default router;