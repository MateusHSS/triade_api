import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { ClientRepository } from '../repositories/ClientRepository';
import { AddressController } from './AddressController';
import { ContactController } from './ContactController';

const contactController = new ContactController();
const addressController = new AddressController();

class ClientController{

	async index(req: Request, res: Response){

		const clientsRespository = getCustomRepository(ClientRepository);

		const clients = await clientsRespository.find({ relations: ['contact', 'address'] });

		return res.json(clients);
	}

	async create(req: Request, res: Response){
		const { name, cpf, contact = null, address = null } = req.body;

		const clientsRespository = getCustomRepository(ClientRepository);

		const clientAlreadyExists = clientsRespository.findOne({ where: { cpf } });

		if(clientAlreadyExists)
			return res.status(400).json({ error: true, message: 'CPF already registered!' });

		const client = clientsRespository.create({ name, cpf });

		if(contact && !(Object.keys(contact).length == 0))
			client.contact = await contactController.create_contact(client, contact);

		if(address && !(Object.keys(address).length == 0))
			client.address = await addressController.create_address(client, address);

		await clientsRespository.save(client);

		return res.json(client);
	}
}

export { ClientController };

