import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Google from "@/assets/google.svg";
import LogoWhite from "@/assets/logo-white.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const validationSchema = z.object({
  email: z.string().min(7, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export default function Auth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => data;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="h-screen bg-auth bg-cover bg-center bg-no-repeat">
          <div className="m-auto flex max-w-[90%] items-end justify-between gap-4 pt-20 lg:justify-start">
            <Image src={LogoWhite} alt="some" className="w-24 md:w-40" />
            <p className="text-[9px] text-slate-700 md:text-sm md:text-[#A6AEB7]">
              Инструмент для предпринимателей <br /> по поиску и работе c
              партнёрами
            </p>
          </div>

          <div className="flex h-[55%] items-center justify-center md:h-[70%]">
            <div className="flex flex-col gap-4 rounded-md bg-white p-6 shadow-md shadow-slate-700 md:w-[425px]">
              <h1 className="text-xs font-semibold md:text-lg">
                Вход на платформу
              </h1>
              <Input
                id="email"
                type="email"
                className="text-xs md:text-sm"
                placeholder="Введите ваш email"
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
                  Войти
                </Button>

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
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
