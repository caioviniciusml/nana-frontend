'use client'
import { z } from 'zod/v4'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { CribItem } from '@/components/crib-item'
import { useCrib } from '@/actions/use-crib'

export const formSchema = z.object({
  cribId: z.string().length(36, { error: "Crib ID must be an UUIDv4" })
})

export type FormType = z.infer<typeof formSchema>

export default function Page() {
  const router = useRouter()
  const [cribs, setCribs] = useState<Array<string>>([])
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cribId: ""
    }
  })
  const { data, refetch } = useCrib(form.watch("cribId"))

  useEffect(() => {
    const localCribs = localStorage.getItem("cribs")
    setCribs(localCribs ? JSON.parse(localCribs) : [])
  }, [])

  function onSubmit(values: FormType) {
    if (cribs.includes(values.cribId)) {
      form.setError("cribId", { message: "This Crib Was Already Registered" })
      return
    }

    refetch()

    if (data?.cribId) {
      const updatedCribs = [...cribs, values.cribId]
      setCribs(updatedCribs)
      localStorage.setItem("cribs", JSON.stringify(updatedCribs))
      router.push(`/${values.cribId}`)
    } else {
      form.setError("cribId", { message: "This Crib doesn't exists" })
    }
  }

  function removeCrib(cribId: string){
    cribs.splice(cribs.indexOf(cribId), 1)
    setCribs(cribs)
    localStorage.setItem("cribs", JSON.stringify(cribs))
  }

  return (
    <main className="pt-5 sm:pt-10 max-w-screen-xl w-full flex flex-col gap-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="cribId"
            render={({ field }) => (
              <FormItem className='text-primary'>
                <FormLabel className='sm:pb-1 text-lg sm:text-2xl font-bold'>Register a New Crib</FormLabel>
                <div className='flex gap-2 font-medium'>
                  <FormControl>
                    <Input {...field} placeholder="Insert Crib ID"
                      className='h-full border border-primary placeholder:text-secondary' />
                  </FormControl>
                  <Button className='cursor-pointer' type="submit">
                    <Plus />
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <section className="flex flex-col gap-5">
        <span className='text-primary text-2xl font-bold'>Your Cribs ({cribs.length})</span>
        {(cribs.length >= 0) && cribs.map((id) => <CribItem key={id} cribId={id} deleteFn={() => removeCrib(id)}/>)}
      </section>
    </main>
  );
}
