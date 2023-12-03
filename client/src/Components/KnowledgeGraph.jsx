import { useEffect, useState } from 'react';
import { Network } from 'react-graph-vis';
import { runCypherQuery } from './neo4jService.js';

export default function KnowledgeGraph({ context }) {
  const [graph, setGraph] = useState({ nodes: [], edges: [] });

  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        let cypherQuery;

        if (context === 'search') {
          // Cypher query for history of papers read by the user
          cypherQuery = 'MATCH ... RETURN ...';
        } else if (context === 'pdfViewer') {
          // Cypher query for papers related to the current paper
          cypherQuery = 'MATCH ... RETURN ...'; 
        }

        const graphData = await runCypherQuery(cypherQuery);
        setGraph({
          nodes: graphData.nodes.map(node => ({ id: node.id, label: node.label })),
          edges: graphData.edges.map(edge => ({ from: edge.from, to: edge.to, label: edge.label })),
        });
      } catch (error) {
        console.error('Error fetching graph data:', error);
      }
    };

    fetchGraphData();
  }, [context]);

  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: '#000000',
    },
  };

  return <Network graph={graph} options={options} />;
};
