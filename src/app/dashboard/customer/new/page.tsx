import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link"
import { NewCustomerForm } from "../components/form";

export default async function NewCustomer() {
    const session = await getServerSession(authOptions)
    if (!session || !session.user){
        redirect("/")
    }
    return(
        <Container>
            <main className="flex flex-col mt-9 mb-2">
                <div className="flex items-center gap-3">
                    <Link href="/dashboard/customer" className="bg-gray-900 px-4 py-1 text-white rounded cursor-pointer">
                    Voltar</Link>
                    <h1 className="text-3xl fomt-bold">Novo cliente</h1>
                </div>

                <NewCustomerForm userId={session.user.id}/>

            </main>
        </Container>
    )
}