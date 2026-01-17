// views/ConversationView.js
import Conversation from "../components/Conversation.js";
import dataService from "../service/dataService.js";

const htmlTemplate = /*html*/`
  <div class="view conversation-view">
    <header class="chat-header card">
      <router-link to="/conversations" class="btn-back">⬅ Back</router-link>
      
      <div class="partner-info">
        <h3 class="partner-name">
          {{ partnerName }}
          <span v-if="isVerified" class="verified-badge" style="font-size: 0.7em;">✅</span>
        </h3>
        <span class="status-online">● Online</span>
      </div>
      
      <button class="btn-icon">⋮</button>
    </header>

    <div class="chat-container">
    <Conversation />
  </div>
`;

export default {
  template: htmlTemplate,
  components: { Conversation }
};