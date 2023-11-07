<template>
  <div>
    <router-link to="/">
      <button class="button is-link is-light">Go Back</button>
    </router-link>
  </div>
  <div class="data">
    <button @click="toggleSelectionMode">
      {{ selectionMode ? 'Disable Selection Mode' : 'Enable Selection Mode' }}
    </button>
    <div v-if="selectionMode">
      <div v-for="(element, index) in interactiveElements" :key="index">
        <div @mouseenter="highlightElement(element)" @mouseleave="resetHighlight(element)">
          {{ element.label }}
        </div>
        <div v-if="element.isSelected">Selected for tracking ({{ element.interactionCount }} interactions)</div>
        <button @click="toggleElementSelection(index)">
          {{ element.isSelected ? 'Unselect' : 'Select' }}
        </button>
      </div>
    </div>
    <div v-if="selectedElements.length > 0">
      <h2>Selected Elements Dashboard</h2>
      <ul>
        <li v-for="(element, index) in selectedElements" :key="index">
          {{ element.label }} - {{ element.interactionCount }} interactions
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No elements selected.</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selectionMode() {
      return this.$store.state.selectionMode;
    },
    interactiveElements() {
      return this.$store.state.interactiveElements;
    },
    selectedElements() {
      return this.$store.getters.selectedElements;
    }
  },
  methods: {
    // toggleSelectionMode() {
    //   // Commit the toggleElementSelection mutation
    //   this.$store.commit('toggleElementSelection', index);
    // },
    toggleSelectionMode() {
      // Dispatch action to toggle selection mode
      this.$store.dispatch('toggleSelectionMode');
    },

    highlightElement(element) {
      // Highlight the element (you can add a border or overlay effect here)
    },
    resetHighlight(element) {
      // Reset the highlight effect
    },
    toggleElementSelection(index) {
      this.$store.commit('toggleElementSelection', index);
    }
  }
};
</script>

<style scoped>
.data {
  text-align: center;
}

/* Add your CSS styles for the selection mode, selected elements, and dashboard here */
</style>
