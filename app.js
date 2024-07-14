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
  },
});

app.mount("#user-goals");
