import axios from 'axios';
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }
  

  parse(message) {
    console.log(message);
    const formData = new FormData();
    formData.append("text", message);
    axios.post(`http://127.0.0.1:8000/nlp_test/`,formData)
    .then((res) => {
      this.actionProvider.handleBotAnswer("Result is "+res.data.tag)
      console.log(res)
    })
    .catch((error) => {
      this.actionProvider.handleBotAnswer("Error !!")
    })
  }
}
export default MessageParser;
