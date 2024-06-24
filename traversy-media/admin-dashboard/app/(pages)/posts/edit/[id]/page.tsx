"use client"

import BackButton from "@/components/shared/back-button"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

import postsData from "@/data/posts"

const formSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    body: z.string().min(1, { message: "Body is required" }),
    author: z.string().min(1, { message: "Author is required" }),
    date: z.string().min(1, { message: "Date is required" })
})

type EditPostPageProps = {
    params: {
        id: string
    }
}

const EditPostPage = ({ params }: EditPostPageProps) => {
    const { toast } = useToast()
    const postId = params.id
    const post = postsData.find((x) => x.id === postId)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: post?.title || "",
            body: post?.body || "",
            author: post?.author || "",
            date: post?.date || ""
        }
    })

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        toast({
            title: "Post has been updated successfully",
            description: `Updated by ${post?.author} on ${post?.date}`
        })
    }

    return (
        <>
            <BackButton text="Back to posts" link="/posts" />
            <h3 className="text-2xl mb-4">Edit Post</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                    {/* Title */}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                    Title
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="bg-slate-300 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                        placeholder="Post title"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Body */}
                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                    Body
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="bg-slate-300 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                        placeholder="Post body"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Author */}
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                    Author
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="bg-slate-300 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                        placeholder="Post author"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Date */}
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                    Date
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="bg-slate-300 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                        placeholder="Post date"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button className="w-full dark:bg-slate-800 dark:text-white ">
                        Update Post
                    </Button>
                </form>
            </Form>
        </>
    )
}

export default EditPostPage
