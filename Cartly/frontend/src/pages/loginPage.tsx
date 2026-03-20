import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import { loginSchema, type LoginUser } from "../schemas/authSchema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginPage() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<LoginUser> = useCallback(
    async (data) => {
      setLoading(true);
      setError("");
      if (!auth) {
        setError("Validation error, please try again later");
        setLoading(false);
        return;
      }
      const loginResult = await auth.login(data.email, data.password);
      if (!loginResult.ok) {
        setError(loginResult.message);
      } else {
        navigate("/myLists");
      }
      setLoading(false);
    },
    [auth, navigate],
  );

  useEffect(() => {
    if (auth?.user) {
      navigate("/");
    }
  }, [auth?.user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-indigo-900/50 border border-indigo-700 rounded-3xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <span className="text-4xl">🛒</span>
          <h1 className="text-3xl font-extrabold text-white mt-2">
            Welcome back
          </h1>
          <p className="text-indigo-300 mt-1 text-sm">
            Log in to your Cartly account
          </p>
        </div>

        {error && (
          <div className="mb-4 px-4 py-3 bg-pink-500/20 border border-pink-500/40 rounded-xl text-pink-300 text-sm text-center">
            {error}
          </div>
        )}

        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-indigo-200 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              {...register("email")}
              disabled={loading}
              className="bg-indigo-800/50 border border-indigo-600 text-white placeholder-indigo-400 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-lime-400/50 disabled:opacity-50 transition"
            />
            {errors.email && (
              <p className="text-pink-400 text-xs mt-0.5">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-indigo-200 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              {...register("password")}
              disabled={loading}
              className="bg-indigo-800/50 border border-indigo-600 text-white placeholder-indigo-400 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-lime-400/50 disabled:opacity-50 transition"
            />
            {errors.password && (
              <p className="text-pink-400 text-xs mt-0.5">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-linear-to-r from-lime-400 to-emerald-500 text-gray-900 font-bold rounded-2xl hover:opacity-90 transition shadow-lg shadow-lime-400/20 disabled:opacity-50 mt-2"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="text-center text-indigo-300 text-sm mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-lime-400 font-medium hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
