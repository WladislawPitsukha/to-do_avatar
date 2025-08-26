import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from '@/graphql/schema';
import mongoose from 'mongoose';
import { NextRequest } from 'next/server';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo_db';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection error:', error));

const TodoSchema = new mongoose.Schema({
    main: {
        title: String,
        description: String,
    },
    status: {
        completed: Boolean,
        priority: String,
        type: String,
        archived: Boolean,
    },
    time: {
        createdAt: Date,
        updatedAt: Date,
        dueDate: Date,
    },
    extra: {
        tags: [String],
        subTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }],
    },
});
const TodoModel = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);

const resolvers = {
    Query: {
        todos: async () => {
            return await TodoModel.find();
        },
        todo: async (_: any, { id }: { id: string }) => {
            return await TodoModel.findById(id);
        },
    },
    Mutation: {
        createTodo: async (_: any, { input }: { input: any }) => {
            const todo = new TodoModel(input);
            return await todo.save();
        },
        updateTodo: async (_: any, { id, input }: { id: string; input: any }) => {
            return await TodoModel.findByIdAndUpdate(id, input, { new: true });
        },
        deleteTodo: async (_: any, { id }: { id: string }) => {
            await TodoModel.findByIdAndDelete(id);
            return true;
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const handler = startServerAndCreateNextHandler(server);
export async function GET(request: NextRequest) {
    return handler(request);
}

export async function POST(request: NextRequest) {
    return handler(request);
}