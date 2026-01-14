// components/Conversation.js

import dataService from "../service/dataService.js";
import MessageList from "./MessageList.js";

const htmlTemplate = /*html*/`
<h2>Conversation with {{ companionInfo.name }}</h2> 
<MessageList :messages="messages"/>
<input type="text" v-model="newText" placeholder="type message..." @keydown.enter="addMessage()">
<button @click="addMessage()">Send</button>
<button @click="clearMessages()">Clear Messages</button>

`


export default {
  template: htmlTemplate,
  components: { MessageList },
  data() {
    return {
      messages: [],
      newText: '',
      companionInfo: {} 
    }
  },
  methods: {
    addMessage() {
      if (!this.newText.trim()) return; 

      const senderName = dataService.getUserName();
      const companionId = this.$route.params.id; 

      const newMessage = {
        sender: senderName,
        text: this.newText,
      };
      
      this.messages.push(newMessage);
      
      dataService.addMessage(newMessage, companionId); 
      
      this.newText = '';
    },

    clearMessages() {
        if (!confirm('Are you sure you want to clear ALL messages in this chat?')) {
            return;
        }

        const companionId = this.$route.params.id; 

        dataService.saveMessages([], companionId); 
        this.messages = []; 
        
        console.log(`Cleared messages for companion ID: ${companionId}`);
    }
  },

  mounted() {
    const companionId = this.$route.params.id; 
    console.log("opened conversation with companionId:", companionId);
    
    this.messages = dataService.getMessages(companionId);
    this.companionInfo = dataService.getCompanion(companionId); 
    
    console.log("companionInfo:", this.companionInfo);
  }
};