const app = Vue.createApp({
  data() {
    return {
      goalInput: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      if (this.goalInput.trim() === "") {
        this.goalInput = "";
        return;
      }
      this.goals.push(this.goalInput);
      this.goalInput = "";
    },
    removeGoal(indx) {
      this.goals.splice(indx, 1);
    },
  },
});

app.mount("#user-goals");
