<template>
  <div class="task" :class="taskColor">
    <div class="row">
      <div v-if="task" class="task-true col s6 offset-s3">
        <h1>{{task.title}}</h1>

        <form @submit.prevent='submitHandler'>
          <div class="input-field">
              <textarea style="min-height: 150px" v-model='description' id="description" class="materialize-textarea"></textarea>
              <label for="description">Description</label>
              <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
          </div>

          <div class="btns">
            <button class="btn blue" type="submit" style="margin-right: 10px">Update task</button>
            <button class="btn green" type="button" style="margin-right: 60px" @click='completeTask'>Complete task</button>
            <button class="btn red" type="button" @click='deleteTask'>Delete task</button>
          </div>
        </form>
      </div>

      <div v-else class="task-false">
        <h1>Task not found</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'task',
  data: () => ({
    description: '',
    color: '',
  }),
  computed: {
    task() {
      return this.$store.getters.taskById(this.$route.params.id)
    },
    taskColor() {
      if (this.task.status === 'new')
        return this.color = 'light-blue lighten-4'
      if (this.task.status === 'active')
        return this.color = 'green lighten-3'
      if (this.task.status === 'completed')
        return this.color = 'red lighten-4'
    },
  },
  mounted() {
    this.description = this.task.description
    setTimeout(() => {
      M.updateTextFields()
    }, 0)
  }, 
  methods: {
    submitHandler() {
      this.$store.dispatch('updateTask', {
        id: this.task.id,
        description: this.description,
      })
      this.$router.push('/')
    },
    completeTask() {
      this.$store.dispatch('completeTask', this.task.id)
      this.$router.push('/')
    },
    deleteTask() {
      this.$store.dispatch('deleteTask', this.task.id)
      this.$router.push('/')
    }
  },
}
</script>

<style lang="scss" scoped>
  .task {
    margin: 1rem;
    min-height: 35rem;
    min-width: 15rem;
  }
</style>