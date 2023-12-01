import neo4j from 'neo4j-driver';
import * as dotenv from 'dotenv';

dotenv.config();

const n4jDriver = neo4j.driver(
    'neo4j://localhost',
    neo4j.auth.basic(process.env.NEO_USER, process.env.NEO_PASS)
);

export default n4jDriver;
