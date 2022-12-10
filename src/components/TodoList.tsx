import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px 20px;
  overflow-y: auto;
  background: gray;
`;

function TodoList() {
  return <TodoListBlock>TodoList</TodoListBlock>;
}

export default TodoList;
