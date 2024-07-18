import { defineComponent, ref } from '@vue-mini/core';

defineComponent(() => {
  const greeting = ref('欢迎使用 微抉择');
  const slogon = ref('你的个人决策自助管理小工具');
  const description = ref('你是否也有选择困难的烦恼或难以决策的瞬间？');
  const description_2 = ref('不妨现在就');
  const button = ref('抉择一下');

  return {
    greeting,
    slogon,
    description,
    description_2,
    button,
  };
});
