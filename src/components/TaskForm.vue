<template>
  <div class="task-form-container">
    <div class="task-form p-card p-shadow-2">
      <h3 class="form-heading">Create New Task</h3>
      <form @submit.prevent="createTask">
        <!-- Title Field -->
        <div class="p-d-flex p-jc-between p-ai-center p-mb-3">
          <label for="title" class="form-label">Title</label>
          <InputText
            id="title"
            v-model="title"
            class="form-input"
            required
            placeholder="Enter task title"
          />
        </div>

        <!-- Description Field -->
        <div class="p-d-flex p-jc-between p-ai-center p-mb-3">
          <label for="description" class="form-label">Description</label>
          <CustomTextarea
            id="description"
            v-model="description"
            class="form-input"
            rows="3"
            required
            placeholder="Enter task description"
          />
        </div>

        <!-- Dropdown for Task Priority -->
        <div class="p-d-flex p-jc-between p-ai-center p-mb-3">
          <label for="priority" class="form-label">Priority</label>

          <AutoComplete
            v-model="selectedPriority"
            :suggestions="filteredPriorities"
            :field="'name'"
            :force-selection="true"
            :dropdown="true"
            @complete="filterPriorities"
            placeholder="Select Priority"
            class="dropdown-input"
          />
        </div>

        <!-- Submit Button -->
        <div class="p-d-flex p-jc-center p-mt-4">
          <CustomButton type="submit" label="Create Task" class="form-button w-full" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import CustomTextarea from 'primevue/textarea'

import AutoComplete from 'primevue/autocomplete'

import CustomButton from 'primevue/button'

export default {
  components: {
    InputText,
    CustomTextarea,
    // Dropdown,
    CustomButton,
    AutoComplete,
  },
  data() {
    return {
      title: '',
      description: '',
      priorities: ['High', 'Medium', 'Low'],
      selectedPriority: null,
      filteredPriorities: [],
    }
  },
  methods: {
    filterPriorities(event) {
      const query = event.query.toLowerCase()
      this.filteredPriorities = this.priorities.filter((priority) =>
        priority.toLowerCase().includes(query),
      )
    },
    createTask() {
      const newTask = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        priority: this.selectedPriority,
        status: 'To Do',
        timeElapsed: 0,
        timerRunning: false,
      }
      // Emit the new task
      this.$emit('add-task', newTask)

      // Reset form fields after task creation
      this.title = ''
      this.description = ''
      this.selectedPriority = ''
    },
  },
}
</script>

<style scoped>
.form-heading {
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  color: #2c3e50;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 10px;
}

.task-form {
  width: 600px;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

h3 {
  text-align: center;
  color: #4a90e2;
  margin-bottom: 20px;
}

.form-label {
  font-weight: bold;
  color: #2c3e50;
  flex-basis: 30%;
}

.form-input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #80808061;
  box-sizing: border-box;
  background-color: #ffffff;
  color: #2c3e50;
}

.dropdown-input {
  width: 100%;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  background-color: #ffffff;
  color: #2c3e50;
}

textarea.form-input {
  resize: vertical;
  min-height: 40px;
  max-width: 100%;
  overflow-wrap: break-word;
}

.p-mb-3 {
  margin-bottom: 15px;
}

.p-d-flex {
  display: flex;
}

.p-jc-between {
  justify-content: space-between;
}

.p-ai-center {
  align-items: center;
}

.form-button {
  background-color: #4a90e2;
  color: rgb(14, 8, 8);
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  text-align: center;
}

.form-button:hover {
  background-color: #357ab7;
}

.p-autocomplete input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #2c3e50;
  box-sizing: border-box;
  background-color: #ffffff;
  color: #2c3e50;
  transition: border-color 0.3s ease;
}

.p-autocomplete input:focus {
  border-color: #4a90e2; /* Blue border on focus */
  outline: none;
}

/* Style for the suggestions dropdown */
.p-autocomplete-panel {
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 250px;
  overflow-y: auto;
  background-color: #ffffff;
}

/* Style for each suggestion item */
.p-autocomplete-item {
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  color: #2c3e50;
}

/* Hover effect for suggestion items */
.p-autocomplete-item:hover {
  background-color: #f0f0f0;
  color: #4a90e2;
}

/* Style when item is selected */
.p-autocomplete-item.p-highlight {
  background-color: #4a90e2;
  color: white;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .p-autocomplete input {
    padding: 8px;
    font-size: 14px;
  }

  .p-autocomplete-panel {
    max-height: 200px;
  }
}

@media (max-width: 480px) {
  .p-autocomplete input {
    padding: 6px;
    font-size: 12px;
  }

  .p-autocomplete-panel {
    max-height: 180px;
  }
}

@media (max-width: 768px) {
  .task-form {
    padding: 15px;
  }

  .form-input {
    padding: 8px;
  }

  .form-button {
    font-size: 14px;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  h3 {
    font-size: 18px;
  }

  .form-button {
    font-size: 12px;
    padding: 8px;
  }
}
</style>
