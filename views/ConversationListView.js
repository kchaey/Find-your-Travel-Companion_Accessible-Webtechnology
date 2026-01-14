// views/ConversationView.js

import Conversation from "../components/Conversation.js";

const htmlTemplate = /*html*/`
  <div>
    <Conversation />
  </div>
`;

export default {
  template: htmlTemplate,
  components: { Conversation }
};