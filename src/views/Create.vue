<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Create Task</h1>

      <form @submit.prevent='submitHandler'>
        <div class="input-field">
          <input v-model='title' id="title" type="text" class="validate" required>
          <label for="title">Title</label>
          <span class="helper-text" data-error="Title is required"></span>
        </div>

        <div class="input-field">
          <input v-model='id' id="taskid" type="text" class="validate" required>
          <label for="taskid">Id</label>
          <span class="helper-text" data-error="ID is required"></span>
        </div>

        <div class="input-field">
            <textarea v-model='description' id="description" class="materialize-textarea"></textarea>
            <label for="description">Description</label>
            <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
        </div>

        <button class="btn green darken-3" type="submit">Create task</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create',
  data: () => ({
    title: '',
    description: '',
    id: '',
  }),
  mounted() {
  }, 
  methods: {
    submitHandler() {
      const task = {
        title: this.title,
        description: this.description,
        id: this.id,
        status: 'new',
      }
      this.$store.dispatch('createTask', task)
      this.$router.push('/')
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

