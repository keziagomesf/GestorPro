import { DashboardHeader } from "./components";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return(
        <>
        <DashboardHeader></DashboardHeader>
        {children}
        </>
    )
}