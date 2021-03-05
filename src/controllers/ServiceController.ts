import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { ServiceRepository } from '../repositories/ServiceRepository';


class ServiceController{

	async create(req: Request, res: Response){
		const { description } = req.body;

		const servicesRepository = getCustomRepository(ServiceRepository);

		const serviceAlreadyExists = await servicesRepository.findOne({ where: { description } });

		if(serviceAlreadyExists)
			return res.status(400).json({ error: true, message: 'A service with this description already exists!' });

		const service = servicesRepository.create({ description });

		await servicesRepository.save(service);

		return res.json(service);
	}
}

export { ServiceController };