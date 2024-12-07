import {db} from "@/lib/db";
import {support} from "@/lib/db/schema";

export async function createRecord() {
    try {
        await db.insert(support).values({
            title: 'Import',
            thumbnailUrl: 'https://images.unsplash.com/photo-1683277464433-d2d4e1e4b0a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'Import goods from foreign countries to Maldives'
        })
    }catch (e) {
        console.log(e)
    }
}