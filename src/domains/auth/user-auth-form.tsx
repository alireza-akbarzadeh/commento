"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Spin } from "@/shared/components";
import { userAuthSchema } from "@/shared/schemas/auth";
import { Button, buttonVariants, Input, Label, toast } from "@/shared/ui";
import { cn } from "@/shared/utils";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: string;
}

type FormData = z.infer<typeof userAuthSchema>;

export function UserAuthForm({ className, type, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isProviderLoading, setIsProviderLoading] = React.useState<
    "none" | "google" | "github"
  >("none");
  const searchParams = useSearchParams();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const signInResult = await signIn("email", {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get("from") || "/dashboard",
    });

    setIsLoading(false);

    // TODO: replace shadcn toast by react-hot-toast
    if (!signInResult?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      });
    }

    return toast({
      title: "Check your email",
      description: "We sent you a login link. Be sure to check your spam too.",
    });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={
                isLoading ||
                isProviderLoading === "google" ||
                isProviderLoading === "github"
              }
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && <Spin />}
            {type === "register" ? "Sign Up with Email" : "Sign In with Email"}
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center uppercase text-bodySmall">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button
          variant="destructive"
          className={"flex-1"}
          onClick={() => {
            setIsProviderLoading("github");
            signIn("github");
          }}
          loading={isLoading || isProviderLoading === "github"}
        >
          {isProviderLoading === "github" ? <Spin /> : "github"} Github
        </Button>
        <Button
          variant="outline"
          className={"flex-1"}
          onClick={() => {
            setIsProviderLoading("google");
            signIn("google");
          }}
          loading={isLoading || isProviderLoading === "google"}
        >
          Google
        </Button>
      </div>
    </div>
  );
}
