import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MainNavigation } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Skills = z.string();
const validationSchema = z.object({
  email: z.string().email({
    message: "Must be a valid email",
  }),
  gender: z.string(),
  skills: z.array(Skills),
});

type ValidationSchema = z.infer<typeof validationSchema>;
export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <MainNavigation />
      <div className="container mx-auto mt-10 w-fit rounded-md border bg-slate-50 p-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-5"
        >
          <div>
            <p className=" mb-2 text-lg font-medium">Email</p>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="mt-2 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <Separator />
          <p className=" text-lg font-medium">Select Gender</p>
          <div className="flex gap-10">
            <div>
              <p>Male</p>
              <input
                type="radio"
                value="male"
                {...register("gender", {
                  required: "Please select your gender",
                })}
              />
            </div>
            <div>
              <p>Female</p>
              <input type="radio" value="female" {...register("gender")} />
            </div>
          </div>
          {errors.gender && (
            <p className="mt-2 text-xs text-red-500">{errors.gender.message}</p>
          )}
          <Separator />
          <p className=" text-lg font-medium">Select your skills</p>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p>JavaScript</p>
              <input
                type="checkbox"
                value="JavaScript"
                {...register("skills", {
                  required: "Please select at-least one skill",
                })}
              />
            </div>
            <div>
              <p>React</p>{" "}
              <input type="checkbox" value="react" {...register("skills")} />
            </div>
            <div>
              <p>Node.js</p>
              <input type="checkbox" value="nodejs" {...register("skills")} />
            </div>
            <div>
              <p>Angular</p>{" "}
              <input type="checkbox" value="angular" {...register("skills")} />
            </div>
          </div>
          {errors.skills && (
            <p className="mt-2 text-xs text-red-500">{errors.skills.message}</p>
          )}
          <Button type="submit" variant="outline">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
