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
              <router-link to="/dashboard">
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
          <source src="your-video-source.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
  <div class="container selected mt-5">
    <h3 class="title is-3">DashBoard</h3>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Type</th>
          <th>Label</th>
          <th>Interaction Count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(element, index) in selectedElements" :key="index">
          <td>{{ element.type }}</td>
          <td>{{ element.label }}</td>
          <td>{{ element.interactionCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    selectedElements() {
      return this.$store.getters.selectedElements;
    }
  },
  methods: {
    sendEvent(type, label) {
      // Simulate sending event to GTM (console log for mock endpoint)
      console.log(`Sending event to GTM: Type - ${type}, Label - ${label}`);

      // Check if interactiveElements array is defined and not empty
      if (this.$store.state.interactiveElements && this.$store.state.interactiveElements.length > 0) {
        // Find the selected element with the corresponding type and label
        const selectedElement = this.$store.state.interactiveElements.find(
          (element) => element.isSelected && element.type === type && element.label === label
        );

        // If a selected element with the same type and label is found, increment its interaction count
        if (selectedElement) {
          this.$store.commit('incrementInteractionCount', selectedElement);
        }
      }
    }
  }
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
