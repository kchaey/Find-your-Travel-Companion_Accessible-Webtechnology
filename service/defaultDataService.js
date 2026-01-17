import dataService from "./dataService.js";

let defaultDataService = {};

let DEFAULT_COMPANIONS = [
    { id: 1, name: 'Anna', destination: 'Tokyo, Japan', date: '2026-03-10', accessibility: 'Wheelchair user', gender: 'female', ageRange: '20s', isVerified: true },
    { id: 2, name: 'Max', destination: 'Rome, Italy', date: '2026-05-20', accessibility: 'Hearing impaired', gender: 'male', ageRange: '30s', isVerified: false },
    { id: 3, name: 'Sofia', destination: 'New York, USA', date: '2026-02-01', accessibility: 'Visually impaired', gender: 'female', ageRange: '40s', isVerified: true },
];

defaultDataService.createDefaultData = function () {
    // Check if data already exists to avoid overwriting
    if (dataService.getCompanions().length === 0) {
        console.log("Creating default companions data with verification status...");
        
        // Save default companions list
        dataService.save(dataService.KEY_COMPANIONS, DEFAULT_COMPANIONS);
        
        // Initial messages for Companion ID: 1 (Anna)
        const defaultMessages_1 = [
            { id: 1, sender: 'Anna', text: 'Hi! Ready for Tokyo?', time: '10:00' },
            { id: 2, sender: 'Me', text: 'Yes, looking forward to it!', time: '10:05' },
        ];
        
        // Save initial messages
        dataService.saveMessages(defaultMessages_1, 1);

        // Optional: Initialize default profile for SettingsView
        const defaultProfile = {
            name: "Guest User",
            gender: "",
            ageRange: "",
            bio: "Hello! I am looking for a travel mate.",
            isVerified: false
        };
        
        // Save default user profile if none exists
        if (!dataService.getUserProfile()) {
            dataService.saveUserProfile(defaultProfile);
        }
    }
}

export default defaultDataService;