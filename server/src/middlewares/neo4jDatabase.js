import neo4j from 'neo4j-driver';


const n4jDriver = neo4j.driver(
    'neo4j://localhost',
    neo4j.auth.basic('neo4j', 'password')
);

export default n4jDriver;
