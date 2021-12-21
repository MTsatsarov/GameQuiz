# GameQuiz brief documentation
 * SPA apllication created for edicatopn. Allows the users to play, create and vote for quizzes.
## Backend
* ASP NET WEB API is used as a backend.
 It maintains basic requests such as GET, POST, PUT DELETE. The server is deployed in azure and it can be found on this address:
(https://gamequizweb20211217202545.azurewebsites.net)
1. Example:
> https://gamequizweb20211217202545.azurewebsites.net/all/1

2. Postman: 
> {
>  "hasNextPage": false,
>  "hasPreviousPage": false,
>  "currentPage": 1,
>  "totalPages": 0,
>  "quizzesCount": 0,
>  "itemsPerPage": 12,
>  "quizzes": []
> }

### Database
* Relation database (MSSQL). Keeps information about users, quizzes,votes etc.
### Identity 

The app maintains user identity. On registration and on login the if the user credentials are correct it receives JWT token and it is allowed to open and see part of the web for logged users.

## Frontend
* React JS is used for frontend. In the app are used stateless, statefull components , routing, context, class components and functional components.
It is deployed in azurewebsites.net. Can be found here:
>https://gamequiz2021.azurewebsites.net/

### Routing 
* Client side routing allowing the users to navigate throuth the pages without reloading them. React-router v5 is used. https://reactrouter.com/

### Spinners 
* For loading component is used react-spinners. https://www.npmjs.com/package/react-spinners

