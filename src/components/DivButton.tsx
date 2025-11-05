import { DivBlockTodoProps } from "./TodoItem";

const DivButtonTodo: React.FC<DivBlockTodoProps> = ({children}) => {
    return(
        <div className="border border-black rounded-2xl w-auto h-auto">
            <h3 className="text-sm font-medium text-gray-700 px-2 py-1">
                {children}
            </h3>
        </div>
    )
}

export default DivButtonTodo;