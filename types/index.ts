export interface ITask {
    _id: string;
    task: string;
    completed: boolean;
}

export interface IDeleteTaskRequestParam {
    params: {
        id: string;
    }
}

export interface TaskProps {
    individualTask: ITask;
    handleCompleteTask: (id: string) => void;
    handleDeleteTask: (id: string) => void;
}

export interface AddTaskProps {
    task: string;
    setTask: (task: string) => void;
    handleCreateTask: () => void;
}