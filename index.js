

module.exports.createVote = async event => {

    console.log(JSON.stringify(event))

    



















    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                result: getMockReturn(),
                statusCode: 1,
                errorCode: null,                
            },
            null,
            2
        ),
    };
};


function getMockReturn(){
    return {
        "campaignId": ,
        "vote": 7
    }
}