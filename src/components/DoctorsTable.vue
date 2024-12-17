<template>
  <div class="mt-6">
    <div class="is-display-flex is-align-items-center is-justify-content-space-between mb-4">
      <h2 class="title is-3 m-0">Врачи</h2>
      <button class="button is-info is-light" @click="addNewDoctor">Добавить врача</button>
    </div>
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>ФИО</th>
          <th>Отделение</th>
          <th>Заведующий</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doctor in doctors" :key="doctor.id">
          <td>
            <input
              v-if="editingId === doctor.id"
              v-model="doctor.name"
              class="input is-info is-small"
              type="text"
              placeholder="Введите ФИО"
            />
            <span v-else>{{ doctor.name }}</span>
          </td>
          <td>
            <div v-if="editingId === doctor.id" class="select is-info is-small">
              <select v-model="doctor.department">
                <option value="Кардиологическое">Кардиологическое</option>
                <option value="Хирургическое">Хирургическое</option>
              </select>
            </div>
            <span v-else>{{ doctor.department }}</span>
          </td>
          <td>
            <input
              class="checkbox"
              type="checkbox"
              v-if="editingId === doctor.id"
              v-model="doctor.isHead"
            />
            <span v-else>{{ doctor.isHead ? 'Да' : 'Нет' }}</span>
          </td>
          <td class="is-flex is-gap-1">
            <button
              v-if="editingId === doctor.id"
              class="button is-small is-success"
              @click="saveDoctor(doctor.id)"
            >
              <span class="icon is-small mr-1">
                <IconSave />
              </span>
              Сохранить
            </button>
            <button
              v-else
              class="button is-small is-info is-outlined"
              @click="editDoctor(doctor.id)"
            >
              <span class="icon is-small mr-1">
                <IconEdit />
              </span>
              Редактировать
            </button>
            <button class="button is-small is-danger is-outlined" @click="deleteDoctor(doctor.id)">
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
import IconDelete from '@/components/icons/IconDelete.vue'
import IconEdit from '@/components/icons/IconEdit.vue'

export default defineComponent({
  components: { IconEdit, IconDelete, IconSave },
  setup() {
    const store = useEmployeeStore()
    const doctors = computed(() => store.employees.filter((emp) => emp.role === 'doctor'))
    const editingId = ref<number | null>(null)

    const addNewDoctor = () => {
      const newDoctor = {
        id: Date.now(),
        name: '',
        department: 'Кардиологическое',
        role: 'doctor',
        isHead: false,
      }
      store.addEmployee(newDoctor)
      editingId.value = newDoctor.id
    }

    const editDoctor = (id: number) => {
      editingId.value = id
    }

    const saveDoctor = (id: number) => {
      editingId.value = null
    }

    const deleteDoctor = (id: number) => {
      store.deleteEmployee(id)
    }

    return { doctors, addNewDoctor, editDoctor, saveDoctor, deleteDoctor, editingId }
  },
})
</script>
