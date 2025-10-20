import { readFileSync } from 'node:fs';
import { createSchema } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { createYoga } from 'graphql-yoga';

const sdl = readFileSync('./schema.graphql', 'utf8');


const schema = makeExecutableSchema({
  typeDefs: sdl,
  resolvers: {},
});

const yoga = createYoga({
  schema: createSchema({ typeDefs: sdl }),
});

import http from 'http';

const port = Number(process.env.PORT) || 4000;
const server = http.createServer(yoga);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`GraphQL running at http://localhost:${port}/graphql`);
});