import {NextRequest, NextResponse} from "next/server";
import {SupportTypeInsert, UserTypeInsert} from "@/lib/db/types";
import {db} from "@/lib/db";
import {support, users} from "@/lib/db/schema";

export async function GET (req: NextRequest) {

    const record = await db.select().from(support).limit(1)
    const hasData = record.length > 0;

    if (hasData) {
        return NextResponse.json({message: 'seed data already inserted'})
    }
    //seed support data
    const supportData : SupportTypeInsert[]  = [
        {
            title: 'Self Registration Guide',
            thumbnailUrl: 'https://images.unsplash.com/photo-1683277464433-d2d4e1e4b0a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'Import goods from foreign countries to Maldives'
        },
        {
            title: 'Export',
            thumbnailUrl: 'https://images.unsplash.com/photo-1683277464433-d2d4e1e4b0a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'Export goods from Maldives to foreign countries'
        },
        {
            title: 'Transit',
            thumbnailUrl: 'https://images.unsplash.com/photo-1683277464433-d2d4e1e4b0a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'Transit goods from Maldives to foreign countries'
        }
    ]

    //seed user data
    const userData : UserTypeInsert[]  = [
        {
            name: 'Hussain',
            email: 'hussain@tradian.com',
            emailVerified: new Date(),
            image: 'https://images.unsplash.com/photo-1683277464433-d2d4e1e4b0a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            name: 'Mohamed',
            email: 'mohamed@tradian.com',
            emailVerified: new Date(),
            image: 'https://images.unsplash.com/photo-1683277464433-d2d4e1e4b0a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }]

    try {
        await db.insert(support).values(supportData)
        await db.insert(users).values(userData)
    }catch (e) {
        console.log(e)
        return NextResponse.json({message: 'Error occured'})
    }
    return NextResponse.json({message: 'seed data inserted successfully'})

}