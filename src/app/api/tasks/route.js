import { NextResponse } from 'next/server';
import { connectDB } from '@/utils/mongoose';
import Task from '@/models/Task';

export const GET = async () => {
  connectDB();
  const tasks = await Task.find();

  return NextResponse.json({ tasks });
};

export const POST = async (req) => {
  try {
    const data = await req.json();

    const savedTask = await new Task(data).save();

    return NextResponse.json(savedTask);
  } catch (e) {
    return NextResponse.json(e.message, { status: 400 });
  }
};
