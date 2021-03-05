import { Router } from 'express';
import { ClientController } from './controllers/ClientController';
import { UserController } from './controllers/UserController';
import { ContactController } from './controllers/ContactController';
import { EmployeeController } from './controllers/EmployeeController';
import { ServiceController } from './controllers/ServiceController';

const userController = new UserController();
const clientController = new ClientController();
const contactController = new ContactController();
const employeeController = new EmployeeController();
const serviceController = new ServiceController();

const router = Router();

router.get('/users', userController.index);
router.post('/users', userController.create);
router.get('/users/:user_id', userController.show);

router.get('/clients', clientController.index);
router.post('/clients', clientController.create);

router.post('/clients/:client_id/contact', contactController.create);

router.post('/employee', employeeController.create);
router.get('/employee', employeeController.index);

router.post('/service', serviceController.create);

export { router };