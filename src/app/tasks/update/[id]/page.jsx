'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const FormPage = ({ params: { id } }) => {
  const router = useRouter();
  const [newTask, setNewTask] = useState({
    title: 'Charging...',
    description: 'Charging...',
  });
  const [isCharging, setIsCharging] = useState(true);

  const getTask = async () => {
    const resp = await fetch(`/api/tasks/${id}`);
    const { title, description } = await resp.json();
    setNewTask({ title, description });
    setIsCharging(false);
  };

  useEffect(() => {
    getTask();
  }, []);

  const handleChange = ({ target }) => {
    setNewTask({ ...newTask, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify(newTask),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (resp.status === 200) {
        router.push('/');
        router.refresh();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form onSubmit={handleSubmit}>
        <h1 className='font-bold text-3xl'>Update Task</h1>

        <input
          type='text'
          name='title'
          placeholder='Title'
          className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'
          onChange={handleChange}
          value={newTask.title}
          disabled={isCharging}
        />
        <textarea
          className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'
          name='description'
          placeholder='Description'
          rows={3}
          onChange={handleChange}
          value={newTask.description}
          disabled={isCharging}
        ></textarea>

        <button
          className='bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg'
          type='submit'
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default FormPage;
