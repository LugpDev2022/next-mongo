import Link from 'next/link';

const TaskCard = ({ task }) => {
  return (
    <Link
      href={`/tasks/update/${task.id}`}
      className='bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-900'
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </Link>
  );
};

export default TaskCard;
