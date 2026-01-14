// service/dataService.js

let dataService = {};

dataService.KEY_COMPANIONS = 'COMPANIONS_DATA'; 
dataService.KEY_CONVERSATIONS = 'CONVERSATIONS_';
dataService.KEY_USER_PROFILE = 'KEY_USER_PROFILE'; 
dataService.save = function (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

dataService.get = function (key) {
    let dataString = localStorage.getItem(key);
    try {
        return JSON.parse(dataString);
    } catch (e) {
        return null;
    }
}
dataService.getCompanions = function() {
    return dataService.get(dataService.KEY_COMPANIONS) || [];
}
dataService.getCompanion = function(companionId) {
    let companions = dataService.getCompanions();
    return companions.find(c => c.id + '' === companionId); 
}
dataService.getMessages = function(companionId) {
    return dataService.get(dataService.KEY_CONVERSATIONS + companionId) || [];
}

dataService.saveMessages = function(messages = [], companionId) {
    dataService.save(dataService.KEY_CONVERSATIONS + companionId, messages);
}

dataService.addMessage = function(newMessage, companionId) {
    let messages = dataService.getMessages(companionId);
    messages.push(newMessage);
    dataService.saveMessages(messages, companionId);
}

dataService.getUserName = function() {
    return dataService.getUserProfile().name;
}

dataService.getUserProfile = function() {
    return dataService.get(dataService.KEY_USER_PROFILE) || { 
        name: 'Chaeyun', 
        gender: '', 
        ageRange: '', 
        bio: '' 
    };
}

dataService.saveUserProfile = function(profile) {
    dataService.save(dataService.KEY_USER_PROFILE, profile);
}

export default dataService;