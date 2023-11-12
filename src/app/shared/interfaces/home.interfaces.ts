export interface HomeInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ObsHomeInterface {
  success?: HomeInterface[];
  error?: string;
}
