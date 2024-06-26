"use client"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {userTypes} from "@/lib/zodTypes/users";
import {z} from "zod";
import Image from "next/image";
import {ChangeEvent, useState} from "react";
import {Textarea} from "@/components/ui/textarea";
import {isBase64Image} from "@/lib/utils";
import { useUploadThing } from '@/lib/uploadthing'
import {updateUser} from "@/lib/actions/user.actions";
import {usePathname, useRouter} from "next/navigation";


interface Props {
    user: {
        clerkId: string
        dbId: number | string
        username: string | null
        name: string
        bio: string | null
        avatar: string | null
    }
    buttonTitle : string
}

export default function AccountP({user , buttonTitle}: Props) {
    const [files , setfiles] = useState<File[]>([])
    const { startUpload } = useUploadThing('media')
    const router = useRouter()
    const pathname = usePathname()

    const form = useForm({
        resolver: zodResolver(userTypes),
        defaultValues: {
            avatar: user?.avatar || "",
            name: user?.name || "",
            username: user?.username || "",
            bio: user?.bio || ""
        }
    })


    const handleImage = (e : ChangeEvent <HTMLInputElement>, fieldChange: (value: string) => void) => {
        e.preventDefault()

        const fileReader = new FileReader()

        if(e.target.files && e.target.files.length) {
            const file = e.target.files[0]

            setfiles(Array.from(e.target.files))

            if(!file.type.includes('image')) return

            fileReader.onload = async (event) => {
                const imageDataUrl = event.target?.result?.toString() || ''

                fieldChange(imageDataUrl)
            }

            fileReader.readAsDataURL(file)

        }
    }

    async function onSubmit(values: z.infer<typeof userTypes>) {
        const avatarData = values.avatar

        // checks if image is in correct format
        const changed = isBase64Image(avatarData)

        // checks if the avatar is changed or not, if changed it is updated
        // if(changed){
        //     const avatarRes = await startUpload(files)
        //
        //     if(avatarRes && avatarRes[0].fileUrl){
        //         values.avatar = avatarRes[0].fileUrl
        //     }
        // }

        await updateUser({
            id: user.clerkId,
            username: values.username,
            name: values.name,
            bio: values.bio,
            avatar: values.avatar,
            path: pathname

            }
        )
        if(pathname === '/profile/edit'){
            router.back()
        } else {
            router.push('/')
        }

        //console.log(values)
    }

    return(

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center gap-10">


                <FormField
                    control={form.control}
                    name="avatar"
                    render={({ field }) => (
                        <FormItem className={'flex items-center gap-4'}>
                            <FormLabel className={'account-form_image-label'}>
                                {field.value ? (
                                    <Image src={field.value}
                                           alt={'avatar'}
                                           width={96} height={96}
                                           priority
                                           className='rounded-full object-contain'
                                    />
                                ) : (
                                    <Image src='/assets/profile.svg'
                                           alt={'avatar'}
                                           width={24} height={24}
                                           priority
                                           className='rounded-full object-contain'
                                    />
                                )
                                }

                            </FormLabel>
                            <FormControl className='flex-1 text-base-semibold text-gray-200'>
                                <Input
                                    type={'file'}
                                    accept={'image/'}
                                    placeholder={'upload your avatar'}
                                    className={'account-form_image-input'}
                                    onChange={(e) =>  handleImage(e , field.onChange)}
                                />
                            </FormControl>

                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className={'flex gap-3 w-full flex-col'}>
                            <FormLabel className={'text-base-semibold text-light-2'}>
                                Name

                            </FormLabel>
                            <FormControl >
                                <Input
                                    type={'text'}
                                    placeholder={'Enter name'}
                                    className={'account-form_input no-focus'}
                                    {...field}
                                   />
                            </FormControl>

                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className={'flex gap-3 w-full flex-col'}>
                            <FormLabel className={'text-base-semibold text-light-2'}>
                                username

                            </FormLabel>
                            <FormControl >
                                <Input
                                    type={'text'}
                                    placeholder={'Enter username'}
                                    className={'account-form_input no-focus'}
                                    {...field}
                                />
                            </FormControl>

                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem className={'flex gap-3 w-full flex-col'}>
                            <FormLabel className={'text-base-semibold text-light-2'}>
                                Bio

                            </FormLabel>
                            <FormControl >
                                <Textarea
                                    rows={5}
                                    placeholder={'Enter bio'}
                                    className={'account-form_input no-focus'}
                                    {...field}
                                />
                            </FormControl>

                        </FormItem>
                    )}
                />




                <Button type="submit">Submit</Button>
            </form>
        </Form>


    )

}