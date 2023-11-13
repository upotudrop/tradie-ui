Your Solution Documentation
===========================

# Running the application
```
docker-compose up -d 
FE: http://localhost:3000
BE: http://localhost:8000
```

# Backend 

I structured the backend to be more a BFF, since the requirements were low
I opted for a MVC such that it would be easier to extend further if there were additional requirements.

docs are available at: ```http://localhost:8000/docs```

I ran out of time to properly add tests, but did create the framework for them. 
similarly, also ran out of time to add a pipeline test for the backend.

This solution ignores:
- monitoring
- logging
- caching

due to time constraints and technical requirements.

# Frontend

Since the requirements were small and given time constraints, I ignored the following:

I wrote a few basic tests, but nothing too fancy.

- data management frameworks
- styling framework
- logging
- advanced error catching
- monitoring

I treated this more of a MVP, or first iteration, such that things are not super coupled
such that it would be easier to refactor should the appropriate decisions arise.

# CI-CD

I added a very basic github/actions pipeline for the FE
 