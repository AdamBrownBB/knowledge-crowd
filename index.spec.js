var assert = require('assert');

const lambdaHandler = require("index.js").createVate;

describe('#index.js tests', function() {

    it('returns client error and message req body is wrong', function(){
        // SETUP
        const testInput = {
            vote: 1
        }
        // ACT
        const respose = lambdaHandler(testInput);

        // ASSERT
        const expectedResult = {
            statusCode: 400,
            body: JSON.stringify(
                {
                    result: "your request is malformed please see the docs",
                    statusCode: 0,
                    errorCode: 1,                
                },
                null,
                2
            ),
        };
      assert.equal(response, expectedResult);
    });

    xit("should do something else", ()=> {

    })

});