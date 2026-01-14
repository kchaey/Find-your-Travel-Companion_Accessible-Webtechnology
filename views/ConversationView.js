// views/ConversationsView.js

import dataService from "../service/dataService.js";

const htmlTemplate = /*html*/`
  <div>
    <h2>My Conversations</h2>
    
    <div v-for="companion of companions" :key="companion.id" class="conversation-list-item">
      <h4>{{ companion.name }} ({{ companion.destination || 'Destination N/A' }})</h4>
      
      <p>Last message: Check chat to see the latest message.</p> 
      
      <router-link :to="'/conversation/' + companion.id">Open Chat</router-link>
    </div>

    <div v-if="companions.length === 0">
        <p>No companions found. Go to Home to find a travel mate!</p>
    </div>

  </div>
`;

export default {
  template: htmlTemplate,
  data() {
    return {
      companions: dataService.getCompanions() 
    };
  }
};