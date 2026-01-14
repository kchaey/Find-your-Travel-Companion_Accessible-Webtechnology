// components/CompanionItem.js

const htmlTemplate = /*html*/`
  <div class="companion-card">
    <h4>{{ companion.name }} ({{ companion.ageRange || 'N/A' }}, {{ companion.gender || 'N/A' }})</h4>
    <p>region: {{ companion.destination }}</p>
    
    <router-link :to="'/conversation/' + companion.id">Start Conversation</router-link>
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