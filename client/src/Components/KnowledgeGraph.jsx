import { useEffect } from 'react';
import neo4j from 'neovis.js';
import getCredAPI from '../API/getCredAPI.js';

export default function KnowledgeGraph() {
  useEffect(() => {
    let userName = ''; 
    let passWrd = '';
    const fneocred = async () => {
      const response = await getCredAPI();
      if (response.statusCode !== 200) {
        console.log('Error! Could not get Graph');
      } else {
        userName = response.data.user;
        passWrd = response.data.password;
      }
    }
    fneocred();

    // Create a new instance of neovis
    const config = {
      container_id: 'neo4j-container',
      server_url: 'bolt://localhost:7687',
      server_user: userName,
      server_password: passWrd,
      labels: {
        Node: {
          caption: 'paper_id', 
        },
      },
      relationships: {
        LINKS: {
          thickness: 'weight', // Change to your relationship property
        },
      },
    };

    const vis = new neo4j(config);

    // Initialize the visualization
    vis.render();
  }, []); // Run the effect only once when the component mounts

  return <div id="neo4j-container" style={{ width: '100%', height: '500px' }} />;
};

