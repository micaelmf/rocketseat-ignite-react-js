export type Task = {
    id?: string;
    description: string;
    status?: 'pending' | 'completed';
};