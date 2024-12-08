import {support} from "@/lib/db/schema";
import {eq} from "drizzle-orm/expressions";
import {db} from "@/lib/db";
import {notFound} from "next/navigation"; // Adjust the path based on your Drizzle setup


async function getData({id}: { id: number }) {
    // const data = await db
    //     .select()
    //     .from(support)
    //     .where(eq(support.id, id))
    //     .limit(1)
    //     .execute();
    const data = db.query.support.findFirst({where: eq(support.id, id)})

    if (!data) {
        return notFound()
    }

    return data;
}

export default async function ExportRegistration({params}: { params: { id: string } }) {
    const data = await getData({id: parseInt(params.id)})
    return (
        <>
            <div className={'container mt-6 w-1/2'}>
                <div className={'container'}>
                    <div className={'flex font-semibold text-md'}>
                        <p className={'text-red-600 opacity-40'}>Support / </p><p className={'ml-3'}> {data?.title} </p>
                    </div>
                    <h1 className={'my-16 font-semibold text-6xl'}>{data?.title}</h1>
                    <p>{data?.description}</p>
                </div>
            </div>

            <pre className={'container mt-4'}>


                {/*{JSON.stringify(params, null, 2)}*/}
                {/*{JSON.stringify(await getData({id: parseInt(params.id)}), null, 1)}*/}
            </pre>
        </>
    )
}