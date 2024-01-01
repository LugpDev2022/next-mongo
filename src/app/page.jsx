import TaskCard from '@/components/TaskCard';
import Task from '@/models/Task';
import { connectDB } from '@/utils/mongoose';

const loadTasks = async () => {
  connectDB();
  return await Task.find();
};

const Home = async () => {
  const tasks = await loadTasks();

  return (
    <div className='grid grid-cols-3 gap-2'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Home;
