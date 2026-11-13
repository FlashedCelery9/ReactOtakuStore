import {LoginScheme, type LoginSchemeInput, type LoginSchemeOutput} from "./LoginScheme.ts";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useContext} from "react";
import {AuthContext} from "../../../context/AuthContext.ts";
import type {LoginDto} from "../../../DTO's/LoginDto.ts";

interface LoginProps {
    setShowComponent: (showComponent: boolean) => void;
}

export default function LoginComponent({setShowComponent}: LoginProps) {
    const {register,
        handleSubmit,
        watch,
    formState: { errors, isSubmitting },
    } = useForm<LoginSchemeInput, undefined, LoginSchemeOutput>({resolver: zodResolver(LoginScheme),
    defaultValues: {
        email: "",
        password: "",
        rememberMe: false,
    }})
    const context = useContext(AuthContext);
    if(!context) throw Error("Auth context not found");

    function onSubmited() {
        console.log("onSubmited");
        // REQUEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //if request OK200
        const user: LoginDto = {email: watch().email, password: watch().password};
        context?.login(user)
        setShowComponent(false);
    }

    return (
        <>
            <main onClick={(e) => {
                if(e.target === e.currentTarget) {
                    setShowComponent(false);
                }

            }} className="fixed inset-0 z-50 grid place-items-center bg-slate-950/75 p-4 backdrop-blur-sm">
                <form
                    className="w-full max-w-md space-y-6 rounded-2xl border border-cyan-400/30 bg-slate-900/95 p-8 text-white shadow-[0_0_60px_rgba(34,211,238,0.2)]"
                    onSubmit={handleSubmit(onSubmited)}
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-cyan-300">
                            Welcome back
                        </h2>
                        <p className="mt-2 text-sm text-slate-400">
                            Login
                        </p>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-200">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            {...register("email")}
                            className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                            placeholder="you@example.com"
                        />
                        <p className="text-sm text-rose-400">{errors.email?.message}</p>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium text-slate-200">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            {...register("password")}
                            className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                            placeholder="Введіть пароль"
                        />
                        <p className="text-sm text-rose-400">{errors.password?.message}</p>
                    </div>

                    <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-300">
                        <input
                            id="rememberme"
                            type="checkbox"
                            {...register("rememberMe")}
                            className="size-4 accent-cyan-400"
                        />
                        Remember me
                    </label>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {isSubmitting ? "Відправлення..." : "Увійти"}
                    </button>
                </form>
            </main>
        </>
    )
}