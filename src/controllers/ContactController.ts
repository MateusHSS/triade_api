import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { Client } from '../models/Client';
import { Contact } from '../models/Contact';
import { ClientRepository } from '../repositories/ClientRepository';
import { ContactRepository } from '../repositories/ContactRepository';


class ContactController{

	async create(req: Request, res: Response){
		const { client_id } = req.params;

		const { telephone_1 = null, telephone_2 = null, cellphone_1 = null, cellphone_2 = null, email = null } = req.body;

		const clientsRespository = getCustomRepository(ClientRepository);

		const client = await clientsRespository.findOne({ where: { id: client_id }, relations: ['contact'] });

		if(!client)
			return res.status(400).json({ error: true, message: 'Client not found!' });

		const contactsRepository = getCustomRepository(ContactRepository);

		const contact = contactsRepository.create({
			telephone_1,
			telephone_2,
			cellphone_1,
			cellphone_2,
			email,
		});
        
		await contactsRepository.save(contact);

		client.contact = contact;

		await clientsRespository.save(client);

		return res.json(client);
	}

	async create_contact(client: Client, contact: Contact): Promise<Contact>{
		const contactsRepository = getCustomRepository(ContactRepository);

		const new_contact = contactsRepository.create({
			telephone_1: contact.telephone_1,
			telephone_2: contact.telephone_2,
			cellphone_1: contact.cellphone_1,
			cellphone_2: contact.cellphone_2,
			email: contact.email,
		});

		await contactsRepository.save(new_contact);

		return new_contact;
	}
}

export { ContactController };
