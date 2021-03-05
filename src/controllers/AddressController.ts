import { getCustomRepository } from 'typeorm';
import { Address } from '../models/Address';
import { Client } from '../models/Client';
import { AddressRepository } from '../repositories/AddressRepository';

class AddressController{

	async create_address(client: Client, address: Address): Promise<Address>{
		const addressesRepository = getCustomRepository(AddressRepository);

		const new_address = addressesRepository.create({
			zipcode: address.zipcode,
			street: address.street,
			number: address.number,
			complement: address.complement,
			district: address.district,
			city: address.city,
			state: address.state,
		});

		await addressesRepository.save(new_address);

		return new_address;
	}

}

export { AddressController };