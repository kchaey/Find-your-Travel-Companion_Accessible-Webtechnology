// views/SettingsView.js

import dataService from "../service/dataService.js";

const htmlTemplate = /*html*/`
  <div class="view">
    <h1 class="view__title">Settings</h1>
    <p class="sub-title">This information will be visible to other travelers.</p>
    
    <div class="settings-container">
      <section class="settings-section">
        <h3 class="card__title" style="margin-top:0">My Profile</h3>
    
        <div class="form-group">
          <label>Display Name</label>
          <input type="text" v-model="profile.name" @input="saveProfile" placeholder="Enter name">
        </div>
        
        <div style="display: flex; gap: 15px;">
          <div class="form-group" style="flex: 1;">
            <label>Gender</label>
            <select v-model="profile.gender" @change="saveProfile">
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
          <div class="form-group" style="flex: 1;">
            <label>Age Range</label>
            <select v-model="profile.ageRange" @change="saveProfile">
        <option value="">Select...</option>
        <option value="20s">20s</option>
        <option value="30s">30s</option>
        <option value="40s">40s</option>
      </select>
    </div>
        </div>
        
        <div class="form-group">
          <label>Introduction</label>
          <textarea rows="4" v-model="profile.bio" @input="saveProfile" placeholder="Tell others about your style..."></textarea>
        </div>
      </section>

      <section class="settings-section">
        <h3 class="card__title" style="margin-top:0">Identity Verification</h3>
        <p style="color: #888; font-size: 0.9rem; margin-bottom: 15px;">Verify your identity to earn a trust badge.</p>
        
        <div style="background: #252525; padding: 20px; border-radius: 12px; text-align: center;">
          <input type="file" id="id-upload" ref="fileInput" @change="onFileSelected" style="display:none">
          <button class="btn-secondary" @click="$refs.fileInput.click()">
            {{ fileName ? fileName : 'Choose ID Card Image' }}
          </button>
          <button class="btn-submit" @click="submitVerification" :disabled="!selectedFile">
            Submit for Verification
          </button>
        </div>
      </section>
    </div>
  </div>
`;

export default {
  template: htmlTemplate,
  data() {
    return {
      // Unified profile object to manage all user data
      profile: {
          name: "",
          gender: "",
          ageRange: "",
        bio: "",
        isVerified: false // Track verification status
      },
      selectedFile: null, // Temporary storage for the file object
      fileName: ""        // Name of the selected file to display
    };
  },
  methods: {
    // Save profile data via dataService
    saveProfile() {
      dataService.saveUserProfile(this.profile); 
      console.log("Profile updated:", this.profile);
    },

    // Handle file selection and update UI
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        this.fileName = file.name;
      }
    },

    // Mock function for submitting identity verification
    submitVerification() {
      if (!this.selectedFile) return;
      
      // Simulating an API call/upload process
      console.log("Uploading ID:", this.selectedFile);
      
      // Once "uploaded", set status to verified and save
      this.profile.isVerified = true;
      this.saveProfile();
      alert("Verification document submitted successfully!");
    }
  },
  mounted() {
    // Load existing profile data when component mounts
    const savedData = dataService.getUserProfile();
    if (savedData) {
      this.profile = savedData;
    }
  }
};