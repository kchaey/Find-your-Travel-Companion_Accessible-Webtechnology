// views/ConversationsView.js
import dataService from "../service/dataService.js";

const htmlTemplate = /*html*/`
  <div class="view">
    <h1 class="view__title">My Conversations</h1>
    
    <div class="conversations-container">
      <div v-for="companion of companions" :key="companion.id" class="conversation-card">
        <div class="chat-info">
          <h4 class="partner-name">
            {{ companion.name }}
            <span v-if="companion.isVerified" class="verified-badge">✅ Verified</span>
          </h4>
          <p style="color: #555; margin: 4px 0;">📍 {{ companion.destination }}</p>
          <p style="color: #888; font-size: 0.85rem;">Check chat for new messages.</p>
    </div>

        <div class="chat-actions" style="display: flex; gap: 10px;">
          <router-link :to="'/conversation/' + companion.id" class="btn-chat">Open</router-link>
          <button class="btn-delete" @click="deleteChat(companion.id)">Delete</button>
        </div>
      </div>
    </div>

  </div>
`;

export default {
  template: htmlTemplate,
  data() {
    return {
      companions: []
    };
  },
  methods: {
    deleteChat(id) {
      if (confirm("Are you sure you want to delete this conversation?")) {
        this.companions = this.companions.filter(c => c.id !== id);
        if (dataService.deleteCompanion) dataService.deleteCompanion(id);
      }
    }
  },
  mounted() {
    this.companions = dataService.getCompanions();
  }
};