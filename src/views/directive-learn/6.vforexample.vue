<template>
  <div>
    <div id="todo-list-item">
      <!-- 冒泡捕获事件 -->
      <form @submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input
          type="text"
          v-model="newTodoText"
          id="new-todo"
          placeholder="continue"
        />
        <button>Add</button>
      </form>
      <ul>
        <!-- 注意这里的 is="todo-item" 属性。这种做法在使用 DOM 模板时是十分必要的，因为在 <ul> 元素内只有 <li> 元素会被看作有效内容。这样做实现的效果与 <todo-item> 相同，但是可以避开一些潜在的浏览器解析错误。 -->
        <li
          is="todo-item"
          v-for="(todo, index) in todos"
          :key="todo.id"
          :title="todo.title"
          @remove="todos.splice(index, 1)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
import todoItem from "./child/todo-item";
export default {
  data() {
    return {
      newTodoText: "",
      todos: [
        {
          id: 1,
          title: "Do the dishes"
        },
        {
          id: 2,
          title: "Take out the trash"
        },
        {
          id: 3,
          title: "Mow the lawn"
        }
      ],
      nextTodoId: 4
    };
  },
  components: {
    "todo-item": todoItem
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = ""; //清空
    }
  }
};
</script>
<style scoped></style>
