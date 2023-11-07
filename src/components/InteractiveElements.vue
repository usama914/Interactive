<template>
  <div class="container.is-fullhd">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <h2 class="navbar-item">
          <strong>
            Interactive Elements
          </strong>
        </h2>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" @click="sendEvent('link', 'Read More')">
            Read More
          </a>

          <a class="navbar-item" @click="sendEvent('link', 'Visit Our Store')">
            Visit Our Store
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/">
                <button class="button is-primary">Dashboard</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="container btn-select mt-5">
      <div class=" is-flex">
        <button @click="sendEvent('button', 'Subscribe')" class="button is-link is-light mr-2">Subscribe</button>
        <button @click="sendEvent('button', 'Download')" class="button is-link is-light mr-2">Download</button>
        <button @click="sendEvent('button', 'Contact Us')" class="button is-link is-light mr-2">Contact Us</button>
      </div>
      <div class="select is-primary">
        <select @change="sendEvent('dropdown', $event.target.value)">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
    </div>
    <div class="container">
      <div class="video">
        <video controls>
          <source src="" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>

  <div class="container selected mt-5">
    <article class="panel is-primary">
      <p class="panel-heading">
        Dashboard
      </p>
      <a v-if="selectedElements?.length > 0" class="panel-block is-active" v-for="(element, index) in selectedElements"
        :key="index">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        <p>{{ element.type }}</p>
        <p>{{ element.label }}</p>
        <p>{{ element.interactionCount }}</p>
      </a>
      <div class="" v-else>
        <p>No Data</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedRecord: [], // Local array to store selected elements
    };
  },
  computed: {
    selectedElements() {
      return this.$store.getters.selectedElementsArray;
    }
  },
  methods: {
    sendEvent(type, label) {
      console.log(`Sending event to GTM: Type - ${type}, Label - ${label}`);

      if (this.$store.state.interactiveElements && this.$store.state.interactiveElements.length > 0) {
        const selectedElement = this.$store.state.interactiveElements.find(
          (element) => element.isSelected && element.type === type && element.label === label
        );

        if (selectedElement) {
          // Check if the selected element is already in the local array
          const existingElementIndex = this.selectedRecord.findIndex(
            (element) => element.type === selectedElement.type && element.label === selectedElement.label
          );

          if (existingElementIndex !== -1) {
            // If the selected element exists in the local array, remove it
            this.selectedRecord.splice(existingElementIndex, 1);
          } else {
            // If the selected element does not exist in the local array, add it
            this.selectedRecord.push(selectedElement);
            this.$store.commit('incrementInteractionCount', selectedElement);
          }
        }
      }
    },
  },

};
</script>

<style scoped>
.btn-select {
  display: flex;
  justify-content: center;
  gap: 5px;
  padding: 10px 0;
}

.video {
  max-width: 600px;
  margin-inline: auto;
}

video {
  width: 100%;
}

.selected {
  width: 100%;
  margin-top: 3rem;
  text-align: center;
}
</style>
