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
    <div>
      <Card>
        <div>
          <h2>Regisztrálj és add hozzá kedvenceidet digitális parkolódhoz.</h2>
        </div>
        <div>
          <CardHeader>
            <CardTitle>Regisztráció</CardTitle>
            <CardDescription>
              Add meg adataidat a regisztrációhoz
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
              noValidate
              className="space-y-5"
            >
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="pelda@email.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="name">Név</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Keresztnév Vezetéknév"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="password">Jelszó</Label>
                <Input
                  type="password"
                  id="password"
                  {...register("password")}
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
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
