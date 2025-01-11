import { useEffect, useState } from "react";
import { useTodos } from "../hooks/useTodos";

export const TodoComponent = () => {
  const { todos } = useTodos();
  const [localToDoState, setLocalToDoState] = useState(todos);
  useEffect(() => {
    setLocalToDoState(todos);
  }, [todos]);

  const updateTodo = (index: number) => {
    const newState = [...localToDoState];
    newState[index].completed = !newState[index].completed;
    setLocalToDoState(newState);
  };
  return (
    <div>
      <p>Liste des taches</p>
      <div>
        {localToDoState.map((todo, index: number) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => updateTodo(index)}
            />
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
};
