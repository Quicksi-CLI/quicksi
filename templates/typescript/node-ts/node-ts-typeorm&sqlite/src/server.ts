import { $log } from 'ts-log-debug';
import { Server } from './index';


new Server()
    .start()
    .then(() => {
        $log.info('Server started...');
    })
    .catch((err) => {
        $log.error(err);
    });