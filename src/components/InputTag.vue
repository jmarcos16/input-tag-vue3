<script>
import { ref, watch } from 'vue';
export default {
  name: 'InputTag',
  emits: ['update:modelValue'],
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
  directives: {
    focus: {
      updated(el, binding) {
        if (binding.value) {
          el.focus();
        }
      }
    },
  },
  setup(props, { emit }) {

    const tag = ref('');
    const selectedTags = ref(props.modelvalue);
    const focused = ref(false);

    /**
     * Watch for changes in the selected tags
     * @param {Array} selectedTags
     * @returns {void}
     */
    watch(selectedTags, (newValue) => {
      emit('update:modelValue', newValue);
    });

    /**
     * Add tag to the list
     * @param {KeyboardEvent} e
     * @returns {void}
     */
    const addTag = (e) => {
      if (e.key === 'Enter' || e.key === 'Tab') {
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
      selectedTags,
      focused
    };
  }
  
}
</script>
<template>
    <ul
      :class="{ focused: focused }"
      @mousedown.prevent.click="focused = true"
      class="input_group">
      <li v-for="(tag, index) in selectedTags" :key="index" class="tag_button">
        <span>{{ tag.name }}</span>
        <button @mousedown.prevent.click="removeTag(index)">x</button>
      </li>
      <li>
        <input
          type="text"
          v-model="tag"
          v-focus="focused"
          placeholder="Add a tag"
          @focus="focused = true"
          @blur="focused = false"
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
  padding: 0.9rem 0.8rem;
  border-radius: 0.3rem;
  gap: 0.3rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.15s ease-in-out; 
}
.tag_button {
  display: flex;
  align-items: center;
  padding: 2px 10px;
  background-color: #f3f4f6;
  border-radius: 1rem;
  font-size: 0.9rem;
  color: #4b5563;
  gap: 0.3rem;
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
  border-radius: 0.3rem;
  transition: all 0.15s ease-in-out;
}   

.input_group input {
  border: none;
  outline: none;
  font-size: medium;
  padding: 0 0.2rem;
  font-size: 1rem;
  transition: all 0.15s ease-in-out;
}

.focused {
  border-color: #5468ff;
  border-width: 1px;
  box-shadow: 0 0 0 2px #5468ff;
}

</style>