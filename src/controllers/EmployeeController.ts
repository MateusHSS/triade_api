import { getCustomRepository } from 'typeorm';
import { Request, Response } from 'express';
import { EmployeeRepository } from '../repositories/EmployeeRepository';


class EmployeeController{

	async index(req: Request, res: Response){
		const employeesRepository = getCustomRepository(EmployeeRepository);

		const employees = await employeesRepository.find({ relations: ['service_orders'] });

		return res.json(employees);
	}

	async create(req: Request, res: Response){
		const { name } = req.body;

		const employeesRepository = getCustomRepository(EmployeeRepository);

		const employee = employeesRepository.create({ name });

		await employeesRepository.save(employee);

		return res.json(employee);
	}
}

export { EmployeeController };