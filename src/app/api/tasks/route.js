import { NextResponse } from 'next/server';

export const GET = () => {
  return NextResponse.json({ message: 'obteniendo tareas' });
};

export const POST = () => {
  return NextResponse.json({ message: 'creando tareas' });
};
