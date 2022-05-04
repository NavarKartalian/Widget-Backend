import express from 'express';
import { SubmitFeedback } from './services/submit-feedback';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

  const nodemailerAdapter = new NodemailerMailAdapter();

  const submitFeedback = new SubmitFeedback(prismaFeedbacksRepository, nodemailerAdapter);

  await submitFeedback.execute({ type, comment, screenshot });

  return res.status(201).send();
});