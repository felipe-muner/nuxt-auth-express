export const state = () => ({
  felipestate: []
});

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    });
  }
};

export const actions = {
  felipeAction() {
    console.log("felipeAction");
  }
};
