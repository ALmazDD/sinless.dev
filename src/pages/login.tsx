import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const validationSchema = z.object({
  email: z.string().min(12, { message: "Enter Email" }).email({
    message: "Must be a valid email",
  }),
  password: z.string().min(8, { message: "Enter password" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });
  const [error, setError] = useState("");

  const onSubmit = (data: ValidationSchema) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="h-screen bg-auth bg-cover bg-center bg-no-repeat">
          <div className="m-auto flex max-w-[90%] items-end justify-between gap-4 pt-20 lg:justify-start" />

          <div className="flex h-[55%] items-center justify-center md:h-[70%]">
            <div className="flex flex-col gap-4 rounded-md bg-white p-6 shadow-md shadow-slate-700 md:w-[425px]">
              <h1 className="text-xs font-semibold md:text-lg">LogIn</h1>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                className="text-xs md:text-sm"
                placeholder="Enter email"
                {...register("email")}
              />
              {errors.email && (
                <p className="py-0 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                className="text-xs md:text-sm"
                placeholder="Enter password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
              <p className="text-xs text-red-500">{error}</p>
              <Link href="/recovery" className="w-fit">
                <p className="text-sm font-semibold text-zinc-500 hover:underline">
                  Forgot password?
                </p>
              </Link>

              <div className="flex flex-col gap-4 ">
                <Button
                  onSubmit={handleSubmit(onSubmit)}
                  type="submit"
                  className="min-w-full bg-slate-900 text-xs hover:bg-slate-700 md:text-sm"
                >
                  LogIn
                </Button>

                {/* <Link href="../profiles/user/create">
                  <Button
                    onSubmit={handleSubmit(onSubmit)}
                    type="submit"
                    className="flex min-w-full items-center gap-2 text-xs md:text-sm"
                    variant="outline"
                  >
                    <Image
                      src={Google}
                      height={24}
                      width={24}
                      alt="google login"
                    />
                    Войти c Google
                  </Button>
                </Link> */}
                <p className="text-sm">
                  Все еще не участник?{" "}
                  <span className="font-semibold text-zinc-500 hover:underline">
                    <Link href="/register">Sign up</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
