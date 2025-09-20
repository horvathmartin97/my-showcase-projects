import { AuthContext } from "../contexts/AuthContext";
import { useCallback, useContext, useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginUser } from "@/services/authSchema";

import { Label } from "../components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Loader2Icon, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<LoginUser> = useCallback(
    async (data) => {
      setLoading(true);
      setApiError(""); // Előző hiba törlése

      if (!auth) {
        setApiError(
          "Hiba történt az authentikációs szolgáltatás betöltése közben."
        );
        setLoading(false);
        return;
      }

      const loginResult = await auth.login(data.email, data.password);
      if (!loginResult.ok) {
        setApiError(loginResult.message);
      } else {
        navigate("/");
      }

      setLoading(false);
    },
    [auth, navigate]
  );

  useEffect(() => {
    if (auth?.user) {
      navigate("/");
    }
  }, [auth?.user, navigate]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-700 dark:bg-gray-950 p-4">
      <Card className="w-full max-w-4xl grid md:grid-cols-2 overflow-hidden shadow-lg animate-in fade-in-50 duration-700 bg-gray-50 ">
        <div className="hidden md:flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-10 text-center border-r-2 dark:border-gray-800">
          <ShieldCheck className="h-16 w-16 mb-4 text-blue-600" />
          <h2 className="text-2xl font-bold tracking-tight">Üdvözlünk újra!</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Jelentkezz be a fiókodba a folytatáshoz.
          </p>
        </div>

        <div className="p-8 ">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl font-bold tracking-tight">
              Bejelentkezés
            </CardTitle>
            <CardDescription>
              Add meg az adataidat a belépéshez.
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0">
            {apiError && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{apiError}</AlertDescription>
              </Alert>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
              noValidate
            >
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="pelda@email.com"
                  {...register("email")}
                  disabled={loading}
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Jelszó</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register("password")}
                  disabled={loading}
                />
                {errors.password && (
                  <p className="text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                    Belépés...
                  </>
                ) : (
                  "Bejelentkezés"
                )}
              </Button>
            </form>

            <Separator className="my-6" />

            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Nincs még fiókod?
                <a
                  href="/registration"
                  className="font-medium text-blue-600 hover:underline ml-3"
                >
                  Regisztrálj!
                </a>
              </p>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
