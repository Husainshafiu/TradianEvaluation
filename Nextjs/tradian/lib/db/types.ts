import {support, users} from "@/lib/db/schema";


export type SupportType = typeof support.$inferSelect
export type UserType = typeof users.$inferSelect

export type SupportTypeInsert = typeof support.$inferInsert
export type UserTypeInsert = typeof users.$inferInsert