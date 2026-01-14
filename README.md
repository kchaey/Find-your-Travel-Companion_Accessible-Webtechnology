# Task 3 submission notes
This document describes the work done for the Task 2 assignment in the "Accessible Webtechnology" course. Based on the component made at Task 1, I add the interactivity and data saving functions. 

## How to run? 
1.  Open the project folder in VS Code.
2.  Right-click the `index.html` file.
3.  Select "Open with Live Server".
* Note: Initial data (Companions, chat messages) is automatically created in Local storage upon application startup via 'dafaultDataService.js'.

## App structure description

I structured the app based on the component principles from the lecture. Here’s a the key files:

### Service Layer 
This layer handles all communication with Local Storage to ensure data persists across sessions.

- dataService.js: Defines core CRUD (Create, Read, Update, Delete) methods to handle:
    Companion List (getCompanions, getCompanion)
    Message History (getMessages, addMessage)
    User Profile (getUserProfile, saveUserProfile)
- defaultDataService.js: Ensures that default mock data (companions and a starter conversation) is loaded into Local Storage if it doesn't exist.

### Views (`views/`)
Routing was refined to resolve conflicts and enable dynamic detail pages.
* `views/HomeView.js`: The main landing page. It now manages search filter state (`v-model`) and executes the searchCompanions() method to dynamically filter the list based on destination, gender, and age range.
* `views/SettingsView.js`: The profile page. All profile fields are bound to the component state and saved to Local Storage using dataService.saveUserProfile() upon any input change.
* `views/ConversationListView.js`: Acts as the Individual Chat Wrapper. It uses the dynamic route parameter (`this.route.params.id`) to load the correct Conversation component.
* `views/ConversationView.js`: Acts as the Conversation List View. It dynamically fetches companions from the service and displays them as navigable conversation links.

### Components (`components/`) - Dynamic Rendering
All list components were converted to accept data via props and render content dynamically using `v-for`.
* `components/CompanionList.js & CompanionItem.js`: Receive the companions array via props and use v-for to render individual companion cards with dynamic router links to the chat page.
* `components/Conversation.js`: Fetches messages using the dynamic ID. The addMessage() method uses `dataService` to persistently save new messages and updates the local state to show them immediately.
* `components/MessageList.js & Message.js`: Receive the messages array via props and use v-for to display the conversation history.

## Implementation details
The core requirements for interactivity have been met by implementing the following dynamic routing, data persistence, and user events. Also it impleneting keyboard accessibility. 

* **View Implementation**: Four views (`HomeView`, `SettingsView`, `ConversationListView`, `ConversationView`) have been created in the `views/` folder.
* **Nested Components**: This requirement has been met in two places:
    1.  `HomeView.js` imports `CompanionList.js`.
    2.  `CompanionList.js` imports `CompanionItem.js` and registers it in its `components` object. This is the first nested structure.
    3.  A second, more complex nested structure exists for the chat: `ConversationView.js` imports `Conversation.js`, which imports `MessageList.js`, which imports `Message.js`.
* **Routing**: `App.js` contains the `<nav>` element with `<router-link>` tags for all four views, matching the paths defined in `router.js`.
* **Static Content**: As per the non-requirements, all content is static. The search buttons and chat inputs are just HTML and have no dynamic functionality.

## Difficulties and Learnings

* **Difficulty:** 
The main challenge was managing the data flow consistency between views and components, especially when migrating from static content to dynamic rendering using `props` and `v-for`. Debugging the TypeError: XXX is not a function loop caused by missing functions in `dataService.js` (e.g., `getCompanions`) and subsequent Router link conflicts required careful synchronization across `App.js`, `router.js`, and the components.

* **Learning:** I solidified my understanding of the Vue.js Component Lifecycle (specifically why data initialization must happen before component mounting) and the best practices for Dynamic Routing (using `/resource/:id`) to pass parameters to detail views. I also learned how to use `dataService` to manage application state persistently outside of the Vue component tree.
