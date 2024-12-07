import {createRecord} from "@/app/business/export/export-registration/_actions/create-record";

export default function ExportRegistration() {
    return (
        <div>
            <h1>Export Registration</h1>

            <form onSubmit={async () => {
                "use server"

                await createRecord();
            }
            } className="">
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}