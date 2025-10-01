"use client";

import * as React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";

interface AuthFormProps {
  type: "login" | "register";
}

export function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "login") {
      console.log("Login:", { email, password });
    } else {
      console.log("Register:", { name, phone, email, password });
    }
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
    signIn("google", {
      callbackUrl:"/dashboard"
    })
  };

  const handleGithubLogin = () => {
    console.log("Login with GitHub");
  };

  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <Card className="w-[400px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">
            {type === "login" ? "Login" : "Register"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {type === "register" && (
              <>
                <div>
                  <Label htmlFor="name" className="pb-2">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="pb-2">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+880123456789"
                    required
                  />
                </div>
              </>
            )}
            <div>
              <Label htmlFor="email" className="pb-2">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="pb-2">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
              />
            </div>
            <Button type="submit" className="w-full cursor-pointer">
              {type === "login" ? "Login" : "Register"}
            </Button>
          </form>

          {/* Only show social login in login page */}
          {type === "login" && (
            <>
              {/* Divider */}
              <div className="flex items-center my-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-2 text-sm text-gray-500">
                  Or continue with
                </span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-2">
                <Button
                  onClick={handleGoogleLogin}
                  variant="outline"
                  className="w-full flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="h-4 w-4" />
                  Login with Google
                </Button>
                <Button
                  onClick={handleGithubLogin}
                  variant="outline"
                  className="w-full flex items-center gap-2 cursor-pointer"
                >
                  <Github className="h-4 w-4" />
                  Login with GitHub
                </Button>
              </div>
              <div className="text-center pt-5">
                <span>Don&apos;t have an account? </span>
                <Link href="/register" className="text-blue-500">
                  Register
                </Link>
              </div>
            </>
          )}
          {type === "register" && (
            <div className="text-center pt-5">
              <span>Already have an account? </span>
              <Link href="/login" className="text-blue-500">
                Login
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
