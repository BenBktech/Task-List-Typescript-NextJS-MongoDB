import Task from "@models/tasks";
import { connectToDB } from "@utils/database";

import { NextResponse } from 'next/server'

export const POST = async(request: Request) => {
    const { task } = await request.json();

    try {
        await connectToDB();
        const newTask = new Task({ task });

        await newTask.save();

        return NextResponse.json(
            newTask,
            { status: 201 },
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            "Failed to create a new task",
            { status: 500 }
        )
    }
}