import dataService from "./dataService.js";

let defaultDataService = {};

let DEFAULT_COMPANIONS = [
    { id: 1, name: 'Anna', destination: 'Tokyo, Japan', date: '2026-03-10', accessibility: 'Wheelchair user', gender: 'female', ageRange: '20s' },
    { id: 2, name: 'Max', destination: 'Rome, Italy', date: '2026-05-20', accessibility: 'Hearing impaired', gender: 'male', ageRange: '30s' },
    { id: 3, name: 'Sofia', destination: 'New York, USA', date: '2026-02-01', accessibility: 'Visually impaired', gender: 'female', ageRange: '40s' },
];

defaultDataService.createDefaultData = function () {
    if (dataService.getCompanions().length === 0) {
        console.log("creating default companions data...");
        dataService.save(dataService.KEY_COMPANIONS, DEFAULT_COMPANIONS);
        const defaultMessages_1 = [
            { id: 1, sender: 'Anna', text: 'Hi! Ready for Tokyo?', time: '10:00' },
            { id: 2, sender: 'Me', text: 'Yes, looking forward to it!', time: '10:05' },
        ];
        dataService.saveMessages(defaultMessages_1, 1);
    }
}

export default defaultDataService;