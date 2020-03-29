var assert = require("assert");

const lambdaHandler = require("./index.js").createVote;

describe("#index.js tests", function() {
  it("returns client error when property is missing", async () => {
    // SETUP
    const testInput = {
      body: '{\n  "campaignId": "102"}'
      // lost of other properties omitted....
    };
    // ACT
    const response = await lambdaHandler(testInput);

    // ASSERT
    const expectedResult = {
      statusCode: 400,
      body: JSON.stringify(
        {
          result: "your request is malformed please see the docs",
          statusCode: 0,
          errorCode: 1
        },
        null,
        2
      )
    };
    // console.log("response :", response);
    assert.equal(response.statusCode, expectedResult.statusCode);
    assert.equal(response.body.errorCode, expectedResult.body.errorCode);
  });

  xit("only accepts valid data types", () => {});
});
