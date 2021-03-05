import { Options } from 'sequelize';

export const dbConfig: Options = {
	dialect: 'mysql',
	host: 'localhost',
	username: 'root',
	password: '',
	database: 'triade_engeplan',
	define: {
		timestamps: true,
		underscored: true,
	}
};