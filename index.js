module.exports.createVote = async (event) => {
  // console.log(JSON.stringify(event))
  // deserialize string body
  const reqBody = JSON.parse(event.body);

  // check to see if all the properties are defined
  const isValid = validateCreateVoteReq(reqBody);
  // todo check that data types are correct
  if (isValid) {
    return generateSuccessResponse(); //TODO refactor! make dynamic
  }
  if (!isValid) {
    console.log("client input invalid, returning error response");
    return generateErrorResponse();
  }
};

/**
 * validate that client in put is valid
 * @param {*} body
 * return boolean
 */
function validateCreateVoteReq(body) {
  // get all the objects keys
  const validKeys = ["campaignId", "vote"]; // * maybe this should live in a "constants" file ???
   const keys = Object.keys(body);
  let numValidKeys = 0;
  keys.forEach((arrayItem) => {
    containsKey = validKeys.includes(arrayItem);
    numValidKeys++;
  });
  // check that all the keys we want are present
  return numValidKeys == validKeys.length;
}

function generateSuccessResponse() {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        result: getMockReturn(),
        statusCode: 1,
        errorCode: null
      },
      null,
      2
    )
  };
}

function generateErrorResponse(errorMessage, errorCode) {
  const errorBody = JSON.stringify(
    {
      result: errorMessage,
      statusCode: 0,
      errorCode: errorCode
    },
    null,
    2
  );
  const apiGReturnDTO = {
    statusCode: 400,
    body: errorBody
  };
  return apiGReturnDTO;
}

function getMockReturn() {
  return {
    campaignId: "101",
    vote: 7
  };
}
