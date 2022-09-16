# Stock-assessment

## Steps to execute the API

To run the API do the following:
- Clone the repository and run `npm i` in terminal.
- Run `npm run start` to start the server.
    - The code will be compiled and translated in js placed in lib directory.
- To run the API import the Sooftoo.curl_collection.json in any client i.e (Insomnia or Postman etc)
    - The API will return the data object based on the input(sku).
- The required function is present in `src/services/softooService` file with name of `find(sku: string).
