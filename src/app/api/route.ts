//TODO: add DataBase connection
//TODO: add authentication
//TODO: add working chat with bot 

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { message } = await request.json();
        const responce = 'Bot received: ' + message;

        return NextResponse.json({ responce });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to process the request' },
            { status: 500}
        )
    }
}