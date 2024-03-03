<script>
import { ref } from 'vue';
export default {
  name: 'InputTag',
  eimts: ['update:modelValue'],
  props: {
    modelvalue: {
      type: Array,
      required: false,
      default: () => [
        { id: 1, name: 'HTML' },
        { id: 2, name: 'CSS' },
        { id: 3, name: 'JavaScript' }
      ]
    }
  },
  setup(props, { emit }) {

    const tag = ref('');
    const selectedTags = ref(props.modelvalue);

    /**
     * Add tag to the list
     * @param {KeyboardEvent} e
     * @returns {void}
     */
    const addTag = (e) => {
      if (e.key === 'Enter') {
        if (tag.value.trim() === '') return;
        const newValue = [
          ...selectedTags.value,
          { id: selectedTags.value.length + 1, name: tag.value }
        ];
        selectedTags.value = newValue;
        tag.value = '';
        emit('update:modelValue', selectedTags.value);
      }
    };

    /**
     * Remove tag from the list
     * @param {number} index
     * @returns {void}
     */
    const removeTag = (index) => {
      const newValue = [...selectedTags.value];
      newValue.splice(index, 1);
      selectedTags.value = newValue;
      emit('update:modelValue', selectedTags.value);
    };
    return {
      addTag,
      removeTag,
      tag,
      selectedTags
    };
  }
  
}
</script>
<template>
    <ul class="input_group">
      <li v-for="(tag, index) in selectedTags" :key="index" class="tag_button">
        <span>{{ tag.name }}</span>
        <button @mousedown.prevent.click="removeTag(index)">x</button>
      </li>
      <li>
        <input
          type="text"
          v-model="tag"
          placeholder="Add a tag"
          @keypress.enter="addTag"
          @keydown.prevent.tab="addTag"
          />
      </li>
    </ul>
</template>
<style scoped>
.input_group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  border: 1px solid #bdbdbe;
  padding: 0 1rem;
  border-radius: 0.3rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.15s ease-in-out; 
}
.tag_button {
  display: flex;
  align-items: center;
  margin: 0.5rem 0.5rem 0.5rem 0;
  padding: 0 10px;
  background-color: #f3f4f6;
  border-radius: 1rem;
  font-size: 0.9rem;
  color: #4b5563;
  border: 1px solid #e4e4e7;
}
.tag_button span {
  line-height: 0;
}

.tag_button button {
  background-color: #f3f4f6;
  border: none;
  cursor: pointer;
  color: #4b5563;
  font-size: 0.9rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  transition: all 0.15s ease-in-out;
}   

.input_group input {
  border: none;
  outline: none;
  font-size: medium;
  padding: 0.8rem 0.2rem;
  font-size: 1rem;
  transition: all 0.15s ease-in-out;
}
</style>