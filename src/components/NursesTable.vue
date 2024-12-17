<template>
  <div class="mt-6">
    <div class="is-display-flex is-align-items-center is-justify-content-space-between mb-4">
      <h2 class="title is-3 m-0">Медсестры</h2>
      <button class="button is-info is-light" @click="addNewNurse">Добавить медсестру</button>
    </div>
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>ФИО</th>
          <th>Отделение</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="nurse in nurses" :key="nurse.id">
          <td>
            <input
              v-if="editingId === nurse.id"
              v-model="nurse.name"
              class="input is-info is-small"
              type="text"
              placeholder="Введите ФИО"
            />
            <span v-else>{{ nurse.name }}</span>
          </td>
          <td>
            <div v-if="editingId === nurse.id" class="select is-info is-small">
              <select v-model="nurse.department">
                <option value="Кардиологическое">Кардиологическое</option>
                <option value="Хирургическое">Хирургическое</option>
              </select>
            </div>
            <span v-else>{{ nurse.department }}</span>
          </td>
          <td class="is-flex is-gap-1">
            <button
              v-if="editingId === nurse.id"
              @click="saveNurse(nurse.id)"
              class="button is-small is-success"
            >
              <span class="icon is-small mr-1">
                <IconSave />
              </span>
              Сохранить
            </button>
            <button v-else class="button is-small is-info is-outlined" @click="editNurse(nurse.id)">
              <span class="icon is-small mr-1">
                <IconEdit />
              </span>
              Редактировать
            </button>
            <button class="button is-small is-danger is-outlined" @click="deleteNurse(nurse.id)">
              <span class="icon is-small">
                <IconDelete />
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useEmployeeStore } from '../stores/store.ts'
import IconSave from '@/components/icons/IconSave.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconDelete from '@/components/icons/IconDelete.vue'

export default defineComponent({
  components: { IconDelete, IconEdit, IconSave },
  setup() {
    const store = useEmployeeStore()
    const nurses = computed(() => store.employees.filter((emp) => emp.role === 'nurse'))
    const editingId = ref<number | null>(null)

    const addNewNurse = () => {
      const newNurse = {
        id: Date.now(),
        name: '',
        department: 'Кардиологическое',
        role: 'nurse',
      }
      store.addEmployee(newNurse)
      editingId.value = newNurse.id
    }

    const editNurse = (id: number) => {
      editingId.value = id
    }

    const saveNurse = (id: number) => {
      editingId.value = null
    }

    const deleteNurse = (id: number) => {
      store.deleteEmployee(id)
    }

    return { nurses, addNewNurse, editNurse, saveNurse, deleteNurse, editingId }
  },
})
</script>
