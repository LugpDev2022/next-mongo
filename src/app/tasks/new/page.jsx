'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const FormPage = () => {
  const router = useRouter();
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const handleChange = ({ target }) => {
    setNewTask({ ...newTask, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await resp.json();

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
        <h1 className='font-bold text-3xl'>Create Task</h1>

        <input
          type='text'
          name='title'
          placeholder='Title'
          className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'
          onChange={handleChange}
          value={newTask.title}
        />
        <textarea
          className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'
          name='description'
          placeholder='Description'
          rows={3}
          onChange={handleChange}
          value={newTask.description}
        ></textarea>

        <button
          className='bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg'
          type='submit'
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default FormPage;
