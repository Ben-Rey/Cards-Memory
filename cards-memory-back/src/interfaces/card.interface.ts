import { User } from './user.interface';

export interface Card {
  id: number;
  createdBy: User;
  createdAt: Date;
  updatedAt: Date;
  question: string;
  answer: string;
  difficulty: number;
  category: string;
}
