import neo4j from 'neo4j-driver';
import getCredAPI from './getCredAPI.js';

const uri = 'bolt://localhost:7687';
const {user, password} = await getCredAPI();

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

const runCypherQuery = async (query, params) => {
  const session = driver.session();

  try {
    const result = await session.run(query, params);
    return result.records.map(record => record.toObject());
  } finally {
    await session.close();
  }
};

export { runCypherQuery };
