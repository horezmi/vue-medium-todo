<template>
  <div class="list">
    <h1>List of Tasks</h1>

    <div class="row">
      <div class="input-field col s6">
        <select ref='select' id='filter' v-model="filter">
          <option value="" disabled selected>Choose status</option>
          <option value="new">New</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
        <label for="filter">Status</label>
      </div>
    </div>

    <button v-if='filter' class="btn btn-small red" @click="filter = null">Clear filter</button>

    <hr>

    <table class="list-table" v-if="tasks.length">
      <thead>
        <tr>
          <th>Title</th>
          <th>ID</th>
          <th>Description</th>
          <th>Status</th>
          <th>Change</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for='task of filterTasks'
          :key="task.id"
        >
          <td>{{task.title}}</td>
          <td>{{task.id}}</td>
          <td class="desc-wrap"><div class="desc-size">{{task.description}}</div></td>
          <td>{{task.status}}</td>
          <td>
            <router-link tag="button"
              class="btn btn-small green"
              :to="'/task/' + task.id"
            >
            Open
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <h1 v-else>
      No tasks
    </h1>

    <hr>

    <button class="btn btn-add green darken-3" type="submit" @click="submitHandler">Add task</button>
  </div>
</template>

<script>
export default {
  name: 'List',
  data: () => ({
    filter: null,
  }),
  methods: {
    submitHandler() {
      this.$router.push('/create')
    },
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    filterTasks() {
      return this.tasks.filter(t => {
        if (!this.filter) {
          return true
        }
        return t.status === this.filter
      })
    }
  },
  mounted() {
    M.FormSelect.init(this.$refs.select)
  },
}
</script>

<style lang="scss" scoped>
  .btn-add {
    margin-top: 3rem;
  }
  .desc-wrap {
    max-width: 400px;
  }
  .desc-size {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>