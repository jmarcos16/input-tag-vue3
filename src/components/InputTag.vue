<script>
export default {
  name: 'InputTag',
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

    /**
     * Add tag to the list
     * @param {KeyboardEvent} e
     * @returns {void}
     */
    const addTag = (e) => {
      if (e.key === 'Enter') {
        emit('input', [...props.value, e.target.value]);
        e.target.value = '';
      }
    };

    /**
     * Remove tag from the list
     * @param {number} index
     * @returns {void}
     */
    const removeTag = (index) => {
      const newValue = [...props.value];
      newValue.splice(index, 1);
      emit('input', newValue);
    };
    return {
      addTag,
      removeTag
    };
  }
  
}
</script>
<template>
    <ul class="input_group">
      <li v-for="(tag, index) in modelvalue" :key="index">
        {{ tag.name }}
        <button @click="removeTag(index)">x</button>
      </li>
      <li>
        <input type="text" @keyup="addTag" />
      </li>
    </ul>
</template>
<style scoped>
.input_group {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
}
.personal-button {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}
</style>