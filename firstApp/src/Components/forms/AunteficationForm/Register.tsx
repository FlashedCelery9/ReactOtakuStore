import {useForm} from "react-hook-form";
import {RegisterScheme, type RegisterSchemeInput, type RegisterSchemeOutput} from "./RegisterScheme.ts";
import {zodResolver} from "@hookform/resolvers/zod";

function onSubmit() {
    console.log("Submitted");
    //REQUEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
interface RegisterFormProps {
    setRegisterFormShow: (setShow: boolean) => void;
}


export default function RegisterForm({setRegisterFormShow}: RegisterFormProps) {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<RegisterSchemeInput, undefined, RegisterSchemeOutput>({resolver: zodResolver(RegisterScheme)})

    return (
        <main onClick={(e) => {
            if(e.target === e.currentTarget) {
                setRegisterFormShow(false);
            }
        }} className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-slate-950/75 p-4 backdrop-blur-sm">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="my-auto w-full max-w-lg space-y-5 rounded-2xl border border-cyan-400/30 bg-slate-900/95 p-6 text-white shadow-[0_0_60px_rgba(34,211,238,0.2)] sm:p-8"
            >
                <header className="mb-7 text-center">
                    <h2 className="text-3xl font-bold text-cyan-300">Create account</h2>
                    <p className="mt-2 text-sm text-slate-400">
                        Заповніть дані для реєстрації
                    </p>
                </header>

                <div className="space-y-2">
                    <label htmlFor="username" className="text-sm font-medium text-slate-200">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        {...register("username")}
                        className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                    />
                    <p className="min-h-5 text-sm text-rose-400">{errors.username?.message}</p>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-200">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                    />
                    <p className="min-h-5 text-sm text-rose-400">{errors.email?.message}</p>
                </div>

                <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium text-slate-200">
                        Address <span className="text-slate-500">(optional)</span>
                    </label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Your address"
                        {...register("address")}
                        className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                    />
                    <p className="min-h-5 text-sm text-rose-400">{errors.address?.message}</p>
                </div>

                <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium text-slate-200">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                        />
                        <p className="min-h-5 text-sm text-rose-400">{errors.password?.message}</p>
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="confirmPassword"
                            className="text-sm font-medium text-slate-200"
                        >
                            Confirm password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            {...register("confirmPassword")}
                            className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                        />
                        <p className="min-h-5 text-sm text-rose-400">
                            {errors.confirmPassword?.message}
                        </p>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSubmitting ? "Creating account..." : "Create account"}
                </button>
            </form>
        </main>
    )
}