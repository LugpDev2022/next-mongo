import Link from 'next/link';
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
      <Link
        href='/tasks/new'
        className='bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-900 text-5xl text-center'
      >
        +
      </Link>
    </div>
  );
};

export default Home;
