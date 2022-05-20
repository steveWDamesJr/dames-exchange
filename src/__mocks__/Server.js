import { setupServer } from 'msw/node';
import Handler from './Handler';
import Handler2 from './Handler2';

const Server = setupServer(...Handler, ...Handler2);

export default Server;
