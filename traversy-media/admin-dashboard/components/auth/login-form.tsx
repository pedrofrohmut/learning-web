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
    email: z
        .string()
        .min(1, { message: "E-mail is required" })
        .email({ message: "Please enter a valid e-mail" }),
    password: z.string().min(1, { message: "Password is required" })
})

const LoginForm = () => {
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { email: "", password: "" }
    })

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        router.push("/")
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Log into your account with your credentials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
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

                        <Button className="w-full dark:bg-slate-800 dark:text-white ">
                            Sign In
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default LoginForm
