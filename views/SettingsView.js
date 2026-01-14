// views/SettingsView.js

import dataService from "../service/dataService.js";

const htmlTemplate = /*html*/`
  <div>
    <h2>Settings (My Profile)</h2>
    <p>This is the information other travelers will see about you.</p>
    
    <label for="name">Your display name for chats</label>
    <input id="name" type="text" v-model="profile.name" @input="saveProfile()">
    
    <div>
      <label for="gender">My Gender:</label>
      <select id="gender" name="gender" v-model="profile.gender" @change="saveProfile()">
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    
    <div>
      <label for="ageRange">My Age Range:</label>
      <select id="ageRange" name="ageRange" v-model="profile.ageRange" @change="saveProfile()">
        <option value="">Select...</option>
        <option value="20s">20s</option>
        <option value="30s">30s</option>
        <option value="40s">40s</option>
        <option value="50s+">50s+</option>
      </select>
    </div>
    
    <div>
      <label for="bio">My Introduction:</label><br>
      <textarea id="bio" name="bio" rows="4" cols="50" v-model="profile.bio" @input="saveProfile()" placeholder="Tell others about your travel style..."></textarea>
    </div>
    
    <button @click="saveProfile()">Save Profile</button>
  </div>
`;

export default {
  template: htmlTemplate,
  data() {
    return {
      // 🚨 모든 프로필 정보를 담을 통합 객체
      profile: {
          name: "",
          gender: "",
          ageRange: "",
          bio: ""
      }
    };
  },
  methods: {
    // 🚨 모든 변경 사항을 dataService를 통해 한 번에 저장
    saveProfile() {
      // TODO: dataService.saveUserProfile 함수가 정의되어 있어야 합니다.
      dataService.saveUserProfile(this.profile); 
      console.log("Profile saved:", this.profile);
    }
  },
  mounted() {
    // 🚨 컴포넌트가 마운트될 때 dataService에서 프로필 정보를 불러옴
    // TODO: dataService.getUserProfile 함수가 정의되어 있어야 합니다.
    this.profile = dataService.getUserProfile(); 
  }
};