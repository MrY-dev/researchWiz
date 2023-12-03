import { useEffect } from 'react';
import neo4j from 'neovis.js';
import getCredAPI from '../API/getCredAPI.js';

export default function KnowledgeGraph() {
  useEffect(() => {
    let userName = ''; 
    let passWrd = '';
    const fneoRender = async () => {
      const response = await getCredAPI();
      if (response.statusCode !== 200) {
        console.log('Error! Could not get Graph');
      } else {
        userName = response.data.user;
        passWrd = response.data.password;
      }
      // Create a new instance of neovis
      const config = {
        container_id: 'neo4j-container',
        server_url: 'bolt://localhost:7687',
        server_user: userName,
        server_password: passWrd,
        labels: {
          PAPER: {
            caption: 'title', 
          },
        },
        relationships: {
          SIMILAR_TO: {
            thickness: 'weight', // Change to your relationship property
          },
        },
      };
    
      const vis = new neo4j(config);
    
      const cypherQuery = 'MATCH (p:PAPER)-[s:SIMILAR_TO]->(other:PAPER) WHERE p.author = $author RETURN p, s, other';
      const parameters = { author: 'John Doe' }; // Adjust the condition based on your requirements
    
      try {
        const result = await vis.renderWithCypher(cypherQuery, parameters);
        console.log(result);
      } catch (error) {
        console.error('Error fetching and rendering graph:', error);
      }
    }
    fneoRender();
  }, []); // Run the effect only once when the component mounts

  return <div id="neo4j-container" style={{ width: '100%', height: '500px' }} />;
};

