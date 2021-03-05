import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';

class UserController{

	async index(req: Request, res: Response){

		const usersRepository = await getCustomRepository(UserRepository);

		const users = await usersRepository.find();

		return res.json(users);

	}

	async create(req: Request, res: Response){
		const { name, email, password } = req.body;

		const usersRespository = getCustomRepository(UserRepository);

		const user = usersRespository.create({ name, email, password });

		await usersRespository.save(user);

		return res.json(user);

	}

	async show(req: Request, res: Response){
		const { user_id } = req.params;

		const usersRespository = getCustomRepository(UserRepository);

		const user = await usersRespository.findOne({ id: user_id });

		if(!user)
			return res.status(400).json({ error: true, message: 'User does not exists!' });

		return res.json(user);
	}
}

export { UserController };
