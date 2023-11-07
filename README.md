User Interface
Navbar: Displays the application name and navigation links.
Interactive Elements: Includes buttons ("Subscribe," "Download," "Contact Us"), links ("Read More," "Visit Our Store"), and a dropdown ("Option 1," "Option 2," "Option 3").
Video Player: Allows users to view videos, complete with playback controls.
Selected Elements Table: Presents a table showcasing the selected interactive elements, detailing their type, label, and the number of interactions.
Behavior
Buttons, Links, and Dropdown: When users click on these elements, events are triggered and recorded by GTM. Each click increments the interaction count associated with the respective element in the Vuex store.
Video Player: Enables users to play videos with standard controls. (The video source path can be customized.)
Vuex Store (store.js)
State (state):

selectionMode: A boolean flag indicating the current selection mode.
interactiveElements: An array of objects representing interactive elements. Each object contains properties like type, label, isSelected, and interactionCount, allowing us to track user interactions effectively.
Getters (getters):

selectedElements: Filters and retrieves the currently selected interactive elements from the Vuex store.
Mutations (mutations):

toggleSelectionMode: Toggles the selectionMode state, enabling or disabling the selection mode.
incrementInteractionCount(selectedElement): Increases the interactionCount property of the provided selectedElement in the Vuex store, capturing user interactions.
Actions (actions):

toggleSelectionMode: Initiates the toggleSelectionMode mutation, allowing seamless switching between selection modes.

Challenges:
I didn't faced any but due to lack of time I couldn't finishup the things.
I was trying to make a table for the selected record but due to lack of attention and time I left it unfinished.

although the selected data is shown in console log.