"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight } from "lucide-react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase/client";
import { signIn, signUp } from "@/lib/actions/auth.auction";
import { FormType } from "@/types";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);

      if (type === "sign-up") {
        const { name, email, password } = values;

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const result = await signUp({
          uid: userCredential.user.uid,
          name: name!,
          email,
          password,
        });

        if (!result?.success) {
          toast.error(result?.message);
          return;
        }

        toast.success("Account Created Successfully. Please Sign In");
        router.push("/sign-in");
      } else {
        const { email, password } = values;

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const idToken = await userCredential.user.getIdToken();

        if (!idToken) {
          toast.error("Sign in failed");
          return;
        }

        await signIn({
          email,
          idToken,
        });

        toast.success("Sign In Successfully");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  const isSignIn = type === "sign-in";

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#171532] to-[#08090D] p-0.5">
      <div className="relative rounded-[23px] bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-xl">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />

        {/* Split layout */}
        <div className="flex flex-row items-stretch">
          {/* Form Section */}
          <div className="flex-1 px-8 py-12 sm:px-12">
            <div className="relative flex flex-col items-center gap-8">
              {/* Logo Section */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-3 bg-primary-200/20 blur-lg rounded-full" />
                  <Image
                    src="/logo.svg"
                    alt="logo"
                    height={40}
                    width={46}
                    className="relative drop-shadow-2xl"
                  />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                  Intervu
                </h2>
              </div>

              {/* Title */}
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold tracking-tight">
                  {isSignIn ? "Welcome back" : "Create your account"}
                </h1>
                <p className="text-sm text-white/60">
                  Practice job interviews with AI and improve your skills
                </p>
              </div>

              {/* Form */}
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full space-y-4 min-w-[320px] sm:min-w-[380px]"
                >
                  {!isSignIn && (
                    <FormField
                      control={form.control}
                      name="name"
                      label="Name"
                      placeholder="Your Name"
                    />
                  )}
                  <FormField
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="Your Email"
                    type="email"
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                  />

                  <Button
                    className="w-full bg-primary-200 hover:bg-primary-200/90 text-black mt-6 h-11 rounded-xl font-medium"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>
                          {isSignIn ? "Signing In..." : "Creating Account..."}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>{isSignIn ? "Sign In" : "Create Account"}</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </Button>
                </form>
              </Form>

              {/* Footer */}
              <p className="text-sm text-white/60">
                {isSignIn ? "No account yet?" : "Already have an account?"}{" "}
                <Link
                  href={!isSignIn ? "/sign-in" : "/sign-up"}
                  className="font-medium text-primary-200 hover:text-primary-200/90 transition-colors"
                >
                  {!isSignIn ? "Sign In" : "Sign Up"}
                </Link>
              </p>
            </div>
          </div>

          {/* Robot Image Section - Only visible on larger screens */}
          <div className="hidden lg:block relative w-[400px] bg-gradient-to-br from-[#171532]/50 to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200/10 to-transparent" />

            {/* Glowing orb behind robot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
              <div className="absolute inset-0 bg-primary-200/20 blur-[100px] rounded-full" />
            </div>

            {/* Robot image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/robot.png"
                alt="AI Interview Assistant"
                width={300}
                height={300}
                className="transform scale-90 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
