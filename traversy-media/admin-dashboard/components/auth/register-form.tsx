"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
        .string()
        .min(1, { message: "E-mail is required" })
        .email({ message: "Please enter a valid e-mail" }),
    password: z.string().min(1, { message: "Password is required" }),
    confirmPassword: z.string().min(1, { message: "Confirm password is required" })
})

const RegisterForm = () => {
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", password: "", confirmPassword: "" }
    })

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        router.push("/")
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>Sign up by adding the info below</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        {/* Name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-slate-300 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                            placeholder="Enter name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* E-mail */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                        E-mail
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-slate-300 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                            placeholder="Enter e-mail address"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Password */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            className="bg-slate-300 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                            placeholder="Enter password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Confirm Password */}
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                        Confirm Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            className="bg-slate-300 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                            placeholder="Enter confirm password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button className="w-full dark:bg-slate-800 dark:text-white ">
                            Sign Up
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default RegisterForm
