// views/HomeView.js

import CompanionList from "../components/CompanionList.js";
import dataService from '../service/dataService.js';

const htmlTemplate = /*html*/`
  <div>
    <h2>Search your Travel mate</h2>
    
    <input type="text" 
           v-model="searchDestination" 
           placeholder="Where are you traveling? (e.g., Paris)" />
    
    <select v-model="searchGender">
      <option value="">Gender (Any)</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    
    <select v-model="searchAgeRange">
      <option value="">Age Range (Any)</option>
      <option value="20s">20s</option>
      <option value="30s">30s</option>
      <option value="40s">40s</option>
      <option value="50s+">50s+</option>
    </select>
    
    <button @click="searchCompanions">Search</button>
    <hr>
    
    <CompanionList :companions="filteredCompanions" />
  </div>
`;

export default {
  template: htmlTemplate,
  // Register the imported component
  components: { CompanionList },
  
  data() {
    const companions = dataService.getCompanions(); 
    return {
      allCompanions: companions, 
      filteredCompanions: companions, 
      
      searchDestination: '',
      searchGender: '',
      searchAgeRange: ''
    };
  },
  
  methods: {
    searchCompanions() {
      const destination = this.searchDestination.toLowerCase().trim();
      const gender = this.searchGender;
      const ageRange = this.searchAgeRange;

      this.filteredCompanions = this.allCompanions.filter(companion => {
        let matches = true;
        
        if (destination && !companion.destination.toLowerCase().includes(destination)) {
          matches = false;
        }

        if (matches && gender && companion.gender !== gender) {
            matches = false;
        }
        
        if (matches && ageRange && companion.ageRange !== ageRange) {
            matches = false;
        }

        return matches;
      });
      
      console.log('Search executed. Results:', this.filteredCompanions.length);
    }
  },
  
  created() {
      this.searchCompanions(); 
  }
};