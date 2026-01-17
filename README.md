# Task 4 submission notes
This document describes the work done for the Task 4 assignment in the "Accessible Webtechnology" course. Based on the interactivity and data saving functions from Task 3, I have refined the UI/UX consistency, expanded the layout for better readability, and implemented a unified card-based design across the application.

## How to run? 
1.  Open the project folder in VS Code.
2.  Right-click the `index.html` file.
3.  Select "Open with Live Server".
* Note: Initial data (Companions, chat messages) is automatically created in Local storage upon application startup via defaultDataService.js. If UI elements like 'Verified' badges do not appear, please clear your browser's Local Storage and refresh.

## App structure description
I structured the app based on component principles and a Unified Design System.

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
The core focus of Task 4 was creating a trustworthy environment through a professional and consistent UI.

* **Verified Travel Mate System**: 
- To help users find a safe travel companion, I implemented a Blue Verified Badge. This mark is granted to users who have completed a verification process, providing a visual indicator of trust.
- The badge is displayed both in the companion search results and within the chat headers.

* **Refined Chat Visibility**: 
- In the dark-themed chat header, the partner's name was changed to high-contrast white (#ffffff).

- The 'Online' status was moved from below the name to directly beside it, creating a modern, streamlined look.

* **Nested Components**: This requirement has been met in two places:
    1.  `HomeView.js` imports `CompanionList.js`.
    2.  `CompanionList.js` imports `CompanionItem.js` and registers it in its `components` object. This is the first nested structure.
    3.  A second, more complex nested structure exists for the chat: `ConversationView.js` imports `Conversation.js`, which imports `MessageList.js`, which imports `Message.js`.

* **Routing**: `App.js` contains the `<nav>` element with `<router-link>` tags for all four views, matching the paths defined in `router.js`.
* **Static Content**: As per the non-requirements, all content is static. The search buttons and chat inputs are just HTML and have no dynamic functionality.

## Difficulties and Learnings

* **Difficulty:** The main challenge was ensuring that the expanded layout didn't leave too much "empty space." I had to experiment with flexbox properties to ensure that as the cards grew wider, the internal elements (like the name and badge) moved to the edges to maintain a balanced visual weight.

* **Learning:** I learned how to implement a Safety-First Design. By adding the isVerified flag to the data layer and reflecting it in the UI with a distinct blue badge, I understood how design choices can directly impact a user's sense of security within an application. I also solidified my skills in CSS Specificity and layout consistency.