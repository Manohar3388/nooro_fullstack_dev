import { Request, Response } from 'express';
import prisma from '../prisma/prisma';

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.tasks.findMany();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, color } = req.body;

    console.log(req.body)
    const newTask = await prisma.tasks.create({
      data: { title, color, completed: false },
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    const updatedTask = await prisma.tasks.update({
      where: { id: Number(id) },
      data: { title, color, completed },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.tasks.delete({ where: { id: Number(id) } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
