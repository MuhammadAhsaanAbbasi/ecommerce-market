"use client"
import React, { useState,useTransition } from 'react'
import * as z from "zod"
import CardWrapper from './cardWrapper'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '../../../schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FormError } from '../form-error'
import { Login } from '../../../actions/login'
import { FormSuccess } from '../form.success'

const LoginForm = () => {
    const [Error, setError] = useState<string | undefined>("")
    const [Success, setSuccess] = useState<string | undefined>("")
    const [isPending,startTransition] = useTransition()
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email:"",
            password:""
        }
    })
    const onSubmit=(values: z.infer<typeof LoginSchema>) => {
        startTransition(()=>{
            Login(values)
            .then((data)=>{
                setError(data.error)
                setSuccess(data.success)
            })
        })
    }
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <CardWrapper
            headLabel='Welcome Back'
            backButtonLabel="Don't have an account"
            backButtonhref="/auth/register"
            showSocial
            >
            <Form {...form}>
                <form 
                className='space-y-5'
                onSubmit={form.handleSubmit((onSubmit))}>
                    <FormField
                    control={form.control}
                    name='email'
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>
                                Email
                            </FormLabel>
                            <FormControl>
                                <Input
                                {...field}
                                disabled={isPending}
                                placeholder='abc@example.com'
                                type="email"
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name='password'
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>
                                Password
                            </FormLabel>
                            <FormControl>
                                <Input
                                {...field}
                                disabled={isPending}
                                placeholder='*********'
                                type="password"
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <FormError message={Error} />
                    <FormSuccess message={Success}/>
                    <Button
                    disabled={isPending}
                    type="submit" className='w-full'>Sign-In</Button>
                </form>
            </Form>
            </CardWrapper>
        </div>
    )
}

export default LoginForm