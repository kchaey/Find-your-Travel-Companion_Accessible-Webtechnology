// components/CompanionList.js
import CompanionItem from "./CompanionItem.js";

const htmlTemplate = `
  <div class="companion-list">
    <h3>Search Results</h3>
    
    <CompanionItem 
      v-for="companion in companions"
      :key="companion.id"
      :companion="companion"
    />
    <div v-if="companions.length === 0">
        <p>No companions match your search criteria.</p>
    </div>
  </div>
`;

export default {
  template: htmlTemplate,
  components: { CompanionItem },
  props: {
    companions: {
      type: Array,
      required: true
    }
  }
};