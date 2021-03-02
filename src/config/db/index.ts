import { createConnections } from 'typeorm';

import { database} from '../sqlite';

export const connection = createConnections([
    {
        type: "sqlite",
        database: database.database,
        entities: [
            __dirname + "./entity/*.js"
        ],
        synchronize: true,
        logging: false
    },
]);

