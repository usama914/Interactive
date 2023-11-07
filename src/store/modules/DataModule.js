const state = {
  selectionMode: false,
  selectedElementsArray: [],
  interactiveElements: [
    {
      type: "button",
      label: "Subscribe",
      isSelected: false,
      interactionCount: 0,
    },
    {
      type: "button",
      label: "Download",
      isSelected: false,
      interactionCount: 0,
    },
    {
      type: "button",
      label: "Contact Us",
      isSelected: false,
      interactionCount: 0,
    },
    {
      type: "link",
      label: "Read More",
      isSelected: false,
      interactionCount: 0,
    },
    {
      type: "link",
      label: "Visit Our Store",
      isSelected: false,
      interactionCount: 0,
    },
    {
      type: "dropdown",
      label: "Option 1",
      isSelected: false,
      interactionCount: 0,
    },
    {
      type: "dropdown",
      label: "Option 2",
      isSelected: false,
      interactionCount: 0,
    },
    {
      type: "dropdown",
      label: "Option 3",
      isSelected: false,
      interactionCount: 0,
    },
  ],
};
const getters = {
  selectedElements: (state) => {
    return state.interactiveElements.filter((element) => element.isSelected);
  },
};
const mutations = {
  toggleSelectionMode(state) {
    state.selectionMode = !state.selectionMode;
  },
};
const actions = {
  toggleSelectionMode({ commit }) {
    commit('toggleSelectionMode');
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
};
