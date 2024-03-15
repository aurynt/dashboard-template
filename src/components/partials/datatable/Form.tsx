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
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  status: z.string().min(2, {
    message: "Status must be at least 2 characters.",
  }),
  amount: z.string().min(2, {
    message: "Amount must be at least 2 characters.",
  }),
});

export default function FormPayment() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: undefined,
      email: undefined,
      amount: undefined,
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <div className="space-y-2">
                    <Label className="capitalize">{field.name}</Label>
                    <Input {...field} />
                  </div>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <div className="space-y-2">
                    <Label className="capitalize">{field.name}</Label>
                    <Input {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <div className="space-y-2">
                    <Label className="capitalize">{field.name}</Label>
                    <Input {...field} />
                  </div>
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
