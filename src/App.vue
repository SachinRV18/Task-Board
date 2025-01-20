<template>
  <div id="app">
    <h2 class="heading">Developer Story Board</h2>

    <div class="task-form-container">
      <TaskForm @add-task="addTask" />
    </div>

    <div class="task-table">
      <table class="p-datatable p-component">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Timer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.title }}</td>
            <td class="task-description">{{ task.description }}</td>
            <td>{{ task.priority.value }}</td>
            <td>{{ task.status }}</td>
            <td>{{ formattedTime(task) }}</td>
            <td>
              <div class="task-controls">
                <CreateButton
                  v-if="task.status === 'To Do'"
                  label="Start"
                  @click="startTask(task)"
                  class="p-button-primary"
                />
                <CreateButton
                  v-if="task.status === 'In Progress' && task.timerRunning"
                  label="Pause"
                  @click="pauseTask(task)"
                  class="p-button-secondary"
                />
                <CreateButton
                  v-if="task.status === 'In Progress' && !task.timerRunning"
                  label="Resume"
                  @click="resumeTask(task)"
                  class="p-button-success"
                />
                <CreateButton
                  v-if="task.status === 'In Progress' && task.timerRunning"
                  label="Stop"
                  @click="stopTask(task)"
                  class="p-button-danger"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TaskForm from './components/TaskForn.vue'
import CreateButton from 'primevue/button'

export default {
  components: {
    TaskForm,
    CreateButton, // Register Button component here
  },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    addTask(task) {
      task.timeElapsed = 0
      task.timerRunning = false
      this.tasks.push(task)
    },

    formattedTime(task) {
      const seconds = Math.floor(task.timeElapsed % 60)
      const minutes = Math.floor(task.timeElapsed / 60)
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    },

    startTask(task) {
      task.timerRunning = true
      task.status = 'In Progress'
      this.updateTask(task)
      this.startTimer(task)
    },

    startTimer(task) {
      if (task.timerInterval) return

      task.timerInterval = setInterval(() => {
        if (task.timerRunning) {
          task.timeElapsed++
          this.updateTask(task)
        }
      }, 1000)
    },

    pauseTask(task) {
      task.timerRunning = false
      clearInterval(task.timerInterval)
      task.timerInterval = null
      this.updateTask(task)
    },

    resumeTask(task) {
      task.timerRunning = true
      this.startTimer(task)
      this.updateTask(task)
    },

    stopTask(task) {
      task.timerRunning = false
      clearInterval(task.timerInterval)
      task.timerInterval = null
      task.status = 'Completed'
      this.updateTask(task)
    },

    updateTask(updatedTask) {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id)
      if (index !== -1) this.tasks[index] = updatedTask
    },
  },
}
</script>

<style scoped>
/* General Styles */
#app {
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
  margin: 0 auto;
}

.heading {
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  color: #2c3e50;
}

/* Task Form and Table */
.task-form-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
}

.task-table {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.p-datatable {
  width: 100%;
  border-collapse: collapse;
}

.p-datatable th,
.p-datatable td {
  padding: 15px;
  text-align: center;
  border: 1px solid #ddd;
  color: #2c3e50;
}

.p-datatable th {
  background-color: #2c3e50;
  color: #fff;
  font-weight: bold;
}

.p-datatable tr:nth-child(even) {
  background-color: #f9f9f9;
}

.p-datatable tr:nth-child(odd) {
  background-color: #ffffff;
}

.p-datatable tr:hover {
  background-color: #f1f1f1;
}

.task-description {
  white-space: normal;
  word-wrap: break-word;
  text-align: justify;
  overflow-wrap: break-word;
  max-width: 300px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
}

/* Buttons */
.task-controls .p-button {
  margin: 4px;
}

.task-controls .p-button-primary {
  background-color: #007bff;
}

.task-controls .p-button-secondary {
  background-color: lavender;
}

.task-controls .p-button-success {
  background-color: #28a745;
}

.task-controls .p-button-danger {
  background-color: #dc3545;
}

.task-controls .p-button:hover {
  opacity: 0.9;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

/* Media Queries for Responsiveness */
@media (max-width: 575.98px) {
  #app {
    padding: 10px;
  }

  .heading {
    font-size: 24px;
  }

  .task-form-container {
    flex-direction: column;
    align-items: center;
  }

  .task-table {
    overflow-x: auto;
  }

  .p-datatable {
    display: block;
    width: 100%;
    overflow-x: auto;
  }

  .p-datatable th,
  .p-datatable td {
    white-space: nowrap;
    font-size: 12px;
    padding: 10px;
  }

  .task-description {
    max-width: 100%;
    height: auto;
  }

  .task-controls .p-button {
    width: 100%;
    margin: 5px 0;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  #app {
    padding: 15px;
  }

  .heading {
    font-size: 28px;
  }

  .task-form-container {
    flex-direction: column;
    align-items: center;
  }

  .task-table {
    margin-top: 20px;
  }

  .p-datatable th,
  .p-datatable td {
    font-size: 14px;
  }

  .task-controls .p-button {
    width: auto;
    margin: 4px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  #app {
    max-width: 80%;
    margin: 0 auto;
    padding: 20px;
  }

  .heading {
    font-size: 30px;
  }

  .task-table {
    margin-top: 30px;
  }

  .p-datatable th,
  .p-datatable td {
    padding: 12px;
  }
}

@media (min-width: 992px) {
  #app {
    max-width: 60%;
  }

  .heading {
    font-size: 36px;
  }

  .task-controls .p-button {
    margin: 4px;
  }

  .task-description {
    max-width: 300px;
  }
}
</style>
