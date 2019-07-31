class CommonResponse {

    constructor(responseCode, responMessage, data){
        this.responseCode = responseCode ? responseCode : "00"; //if constructor params null, set with 00
        this.responMessage = responMessage ? responMessage: "Success";
        this.data = data;
    }
}
module.exports = CommonResponse;
