"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Product } from "@/type";

const formSchema = z.object({
  nama: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  harga: z.string().min(2, {
    message: "Status must be at least 2 characters.",
  }),
  stok: z.string().min(2, {
    message: "Amount must be at least 2 characters.",
  }),
});

export default function FormProduct({ data }: { data?: Product }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: data?.name ?? "",
      harga: data?.price.toString() ?? undefined,
      stok: data?.stock.toString() ?? undefined,
    },
  });
  const submit = (values: z.infer<typeof formSchema>) => {
    toast("Successfully submitted", {
      style: {
        color: "#61DF88",
      },
      position: "top-right",
    });
    console.log(values);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)}>
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">{field.name}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="harga"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">{field.name}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stok"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">{field.name}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-teal mt-3">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
