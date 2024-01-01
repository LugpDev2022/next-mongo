import { NextResponse } from 'next/server';
import { connectDB } from '@/utils/mongoose';
import Task from '@/models/Task';

export const GET = async (req, { params: { id } }) => {
  try {
    connectDB();
    const taskFound = await Task.findById(id);

    if (!taskFound)
      return NextResponse.json({ message: 'Task not found' }, { status: 404 });

    return NextResponse.json(taskFound);
  } catch (e) {
    return NextResponse.json(e.message, { status: 400 });
  }
};

export const DELETE = async (req, { params: { id } }) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask)
      return NextResponse.json({ message: 'Task not found' }, { status: 404 });

    return NextResponse.json(deletedTask);
  } catch (e) {
    return NextResponse.json(e.message, { status: 400 });
  }
};

export const PUT = async (req, { params: { id } }) => {
  try {
    const data = await req.json();

    const updatedTask = await Task.findByIdAndUpdate(id, data, { new: true });

    return NextResponse.json(updatedTask);
  } catch (e) {
    return NextResponse.json(e.message, { status: 400 });
  }
};
