import { defineComponent, ref } from '@vue-mini/core';

defineComponent(() => {
  const greeting = ref('欢迎使用 微抉择');

  return {
    greeting,
  };
});
