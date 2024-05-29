import { useState } from 'react';

interface TList {
  id: number;
  text: string;
}

export default function Todolist() {
  const [todos, setTodos] = useState<TList[]>([]);

  const handleCreate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // e.target.value
    // setTodos()
  };

  return (
    <>
      <div className="createTodo">
        <input
          name="todo"
          type="text"
          id="todoInput"
          onChange={(e) => handleCreate(e)}
        />
        <button>추가</button>
      </div>
      <div>
        <input type="text" name="searchTodo" placeholder="제목을 검색하세요." />
        <button>검색</button>
      </div>
      <ul className="todoList">
        <li>
          할일
          <select name="todoStatus" id="todoStatus">
            <option value="notyet">미시작</option>
            <option value="progress">진행중</option>
            <option value="done">완료</option>
          </select>
          <button>삭제</button>
        </li>
      </ul>
    </>
  );
}
