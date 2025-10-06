import { AuthContext } from "../contexts/AuthContext";
import { registerUserSchema, type RegisterUser } from "../services/authSchema";
import { useCallback, useContext, useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { Loader2Icon } from "lucide-react";

export default function RegistrationPage() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>({
    resolver: zodResolver(registerUserSchema),
    mode: "onChange",
    defaultValues: { email: "", name: "", password: "" },
  });

  const onSubmit: SubmitHandler<RegisterUser> = useCallback(
    async (data) => {
      setLoading(true);
      setApiError("");
      if (!auth) {
        setApiError("Hiba a betöltés közben");
        setLoading(false);
        return;
      }
      const regsiterResult = await auth.register(
        data.email,
        data.name,
        data.password
      );
      if (!regsiterResult.ok) {
        setApiError(regsiterResult.message);
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
    <div className="flex items-center justify-center  my-30 mx-auto dark:bg-neutral-950 p-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Regisztráció</CardTitle>
            <CardDescription>
              Regisztrálj és add hozzá kedvenceidet digitális parkolódhoz.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {apiError && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{apiError}</AlertDescription>
              </Alert>
            )}
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-4"
            >
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="pelda@email.com"
                  {...register("email")}
                  className="mt-1"
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="name">Név</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Keresztnév Vezetéknév"
                  {...register("name")}
                  className="mt-1"
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="password">Jelszó</Label>
                <Input
                  type="password"
                  id="password"
                  {...register("password")}
                  className="mt-1"
                  placeholder="...."
                />
                {errors.password && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                    Folyamatban...
                  </>
                ) : (
                  "Regisztráció"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
