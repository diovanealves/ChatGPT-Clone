const openai = require("../config/openai");
const inputPrompt = require("../model/inputModel");

module.exports = {
  async sendText(req, res) {
    const openaiAPI = openai.configuration();
    const inputModel = new inputPrompt(req.body);

    try {
      const response = await openaiAPI.createCompletion(
        openai.textCompletion(inputModel)
      );

      return res.status(200).json({
        sucess: true,
        data: response.data.choices[0].text,
      });
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        eroor: error.response
          ? error.response.data
          : "There is an error on the server",
      });
    }
  },
};
