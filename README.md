# ResearchWiz.

ResearchWiz is efficient  PhD Research Knowledge Collaboration Tool. 

## Description.

It's a platform that consolidates insights from diverse research papers, fostering collaboration on ideas and addressing specific problems
This tool features an effective search function enabling users to locate papers by title, author, or topic
It offers personalized paper recommendations derived from previously read papers, enhancing the exploration of related concepts and themes.

## Motivation.

Phd student read many research papers, it is difficult to memorize the ideas, and  make decisions based on combining the ideas. 
ResearchWiz solves this problem by 
* An efficient storage management system.
    * e revisted in the future for reference.
* An excellent recommendation system.
    * Application provides the search option to recommend the papers based on the ideas ,comments of the user from the historical reads.

## Implementation.

### Technologies Used.

* FrontEnd
    * ReactJS
        The UI part of the application is handled by ReactJS.

* BackEnd
    * ExpressJs
        Model view controller(MVC) architecture is used in ExpressJS.

    * MongoDb
        MongoDB is used as it as doesn't have  definite schema and is suited for unstructured data.

    * Neo4j
        Neo4j's graph structure directly models relationships between users and papers read by them
        As recommendations has to be provided based on users historical reads,item similarities Neo4j is used. 





    
    

