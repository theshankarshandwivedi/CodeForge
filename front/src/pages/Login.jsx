import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function LoginForm({ className, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  let User = {
    email: email,
    password: password,
  };

  const navigate = useNavigate();

  // const handleGoogleLoginSuccess = async (credentialResponse) => {
  //   try {
  //     const res = await fetch("http://localhost:3000/api/auth/google", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ token: credentialResponse.credential }),
  //     });

  //     const data = await res.json();
  //     localStorage.setItem("token", data.token);
  //     login(data.token, data.user);
  //     alert("Google login successful!");
  //     navigate("/");
  //   } catch (err) {
  //     console.error("Google Login Error:", err);
  //   }
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(User);
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(User),
    });
    if (response.status !== 200) {
      const error = await response.json();
      console.error("Login failed:", error);
      return;
    } else {
      const data = await response.json();
      const header = response.headers.get("Authorization");
      console.log("Login successful:", data);
      console.log("Authorization header:", header);
      const token = response.headers.get("Authorization");
      console.log("Token from header:", token);
      console.log("User data:", data.user);
      login(token, data.user);
      console.log("Token:", token);
      // You can store the token in localStorage or cookies here if needed
      localStorage.setItem("token", header.split(" ")[1]);
      navigate("/");
    }
    console.log(response);
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      name="email"
                      value={User.email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      value={User.password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button
                      type="submit"
                      onClick={submitHandler}
                      className="w-full cursor-pointer"
                    >
                      Login
                    </Button>

                    <GoogleLogin
                      variant="outline"
                      className="w-full cursor-pointer"
                      onSuccess={async (credentialResponse) => {
                        try {
                          const { data } = await axios.post(
                            "http://localhost:3000/api/auth/google",
                            {
                              token: credentialResponse.credential,
                            }
                          );

                          login(data.user, data.token); // update AuthContext
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      onError={() => console.log("Login Failed")}
                    />
                  </div>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <a href="/register" className="underline underline-offset-4">
                    Sign up
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
