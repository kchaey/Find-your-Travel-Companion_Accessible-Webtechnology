// components/CompanionItem.js

const htmlTemplate = /*html*/`
  <div class="companion-card">
    <div class="card__header">
      <h4 class="card__title">
        {{ companion.name }}
        <span v-if="companion.isVerified" class="verified-badge">✅ Verified</span>
      </h4>
    </div>
    <p class="card__text">({{ companion.ageRange }}, {{ companion.gender }})</p>
    <p class="card__text">📍 {{ companion.destination }}</p>
    <router-link :to="'/conversation/' + companion.id" class="btn-chat">Start Conversation</router-link>
  </div>
`;

export default {
  template: htmlTemplate,
  props: {
      companion: {
          type: Object,
          required: true
      }
  }
};