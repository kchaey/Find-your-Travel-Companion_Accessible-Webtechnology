// components/MessageList.js

import Message from "./Message.js";

const htmlTemplate = /*html*/`
  <div class="message-list" style="border: 1px solid #eee; padding: 10px; height: 200px; overflow-y: auto;">
    
    <Message 
        v-for="(message, index) in messages" 
        :key="index"
        :message="message"
    />
    
    <div v-if="messages.length === 0">
        <p>Start a new conversation!</p>
    </div>
  </div>
`;

export default {
  template: htmlTemplate,
  components: { Message },
  props: {
      messages: {
          type: Array,
          required: true
      }
  }
};