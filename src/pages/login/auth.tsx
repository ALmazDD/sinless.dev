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

  const { data: session } = useSession();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-auth bg-no-repeat bg-cover bg-center h-screen">
          <div className="max-w-[90%] m-auto flex items-end justify-between lg:justify-start gap-4 pt-20">
            <Image src={LogoWhite} alt="some" className="w-24 md:w-40" />
            <p className="text-slate-700 md:text-[#A6AEB7] text-[9px] md:text-sm">
              Инструмент для предпринимателей <br /> по поиску и работе c
              партнёрами
            </p>
          </div>

          <div className="flex justify-center items-center h-[55%] md:h-[70%]">
            <div className="flex flex-col gap-4 md:w-[425px] bg-white p-6 rounded-md shadow-md shadow-slate-700">
              <h1 className="text-xs md:text-lg font-semibold">
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
                <p className="text-xs text-red-500 mt-2">
                  {errors.email.message}
                </p>
              )}
              <div className="flex flex-col gap-4 ">
                <Button
                  onSubmit={handleSubmit(onSubmit)}
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-700 min-w-full text-xs md:text-sm"
                >
                  Войти
                </Button>

                <Button
                  onSubmit={handleSubmit(onSubmit)}
                  type="submit"
                  className="flex items-center gap-2 text-xs md:text-sm min-w-full"
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
