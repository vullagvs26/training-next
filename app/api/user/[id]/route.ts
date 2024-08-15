import { UserController } from "@/data/controllers/UserController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest,
    {params}: {params: {id: string}}
) {
    try {
        const id = parseInt(params.id, 10)
        if (isNaN(id) || id <= 0) {
            return new Error ("invalid ID")
        }       
        return await UserController.showUser(id) 

    } catch (error) {
        return new Error('failed to fetch user')
    }
}

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id, 10)
        const body = await req.json()
        if (isNaN(id) || id <= 0) {
            return NextResponse.json({ message: 'Invalid ID' }, { status: 404 })
        }
 
        if(!body?.email){
            return NextResponse.json({ message: 'Vaildation Error',
                data: 'Email is required!'
             }, { status: 400 })
        }
 
        return await UserController.updateUser(id, body)
 
    } catch (error) {
        return new Error('Failed to update User.')
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id, 10)
        if (isNaN(id) || id <= 0) {
            return NextResponse.json({ message: 'Invalid ID' })
        }
        return await UserController.deleteUser(id)
    } catch (error) {
        return new Error('Failed to delete user.')
    }
}
