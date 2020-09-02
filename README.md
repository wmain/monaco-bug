### Steps to reproduce
* `npm install` or `yarn install`
* `npm run serve` and navigate to `http://localhost:1234`
* Note the CORS errors in the console and the editor error about problems loading the schema
* Kill `parcel`
* `npm i monaco-editor@0.18.1 --save && npm run serve` and navigate to `http://localhost:1234`
* Note that the schema properly invalidates the model value

