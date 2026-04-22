'use server'

import { prisma } from "@/db/prisma"
import { revalidatePath } from "next/cache"

type TicketState = {
    success: boolean
    message: string
}

export const createTicket = async (prevState: TicketState, formData: FormData): Promise<TicketState> => {
    try {
        const subject = formData.get("subject") as string
        const description = formData.get("description") as string
        const priority = formData.get("priority") as string

        if (!subject || !description || !priority) {
            return { success: false, message: "All fields are required" }
        }

        // Create ticket
        const ticket = await prisma.ticket.create({
            data: { subject, description, priority }
        })

        revalidatePath("/tickets")

        return { success: true, message: "Ticket created successfully" }
    } catch (err) {
        return { success: false, message: "An error occured while creating the ticket" }
    }
}
