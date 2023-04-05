import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const validationSchema = z.object({
  email: z.string().min(7, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z.string().min(7, { message: "Password is required" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export default function Recovery() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="h-screen bg-auth bg-cover bg-center bg-no-repeat">
          <div className="m-auto flex max-w-[90%] items-end justify-between gap-4 pt-20 lg:justify-start" />

          <div className="flex h-[55%] items-center justify-center md:h-[70%]">
            <div className="flex flex-col gap-4 rounded-md bg-white p-6 shadow-md shadow-slate-700 md:w-[425px]">
              <h1 className="text-xs font-semibold md:text-lg">
                Request new password
              </h1>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                className="text-xs md:text-sm"
                placeholder="Enter email"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}

              <div className="flex flex-col gap-4 ">
                <Button
                  onSubmit={handleSubmit(onSubmit)}
                  type="submit"
                  className="min-w-full bg-slate-900 text-xs hover:bg-slate-700 md:text-sm"
                >
                  Request password
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
