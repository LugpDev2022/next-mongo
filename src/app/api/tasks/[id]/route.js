import { NextResponse } from 'next/server';

export const GET = (req, { params: { id } }) => {
  return NextResponse.json({ message: `obteniendo tarea ${id}` });
};

export const DELETE = (req, { params: { id } }) => {
  return NextResponse.json({ message: `eliminando tarea ${id}` });
};

export const PUT = (req, { params: { id } }) => {
  return NextResponse.json({ message: `actualizando tarea ${id}` });
};
