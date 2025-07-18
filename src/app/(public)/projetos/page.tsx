import { Construction } from "lucide-react";
import Link from "next/link";

export default function Page () {
    return (
        <section className="text-center flex items-center justify-center w-full h-screen">
            <div>
                <div className="text-3xl flex items-center justify-center rounded-xl">
                    <Construction size={100} className="text-white" />
                </div>
                <h1 className="text-6xl font-bold text-blue-600">Essa página está em Desenvolvimento.</h1> 
                <Link href="/">
                    <button className="bg-blue-950 p-2 rounded-sm my-5 cursor-pointer text-3xl text-white font-bold">
                        Voltar a Home
                    </button>
                </Link>
            </div>
        </section>
    )
}