export const metadata = {
    title:"Painel do site",
    description:"Este é o painel demonstrativo do SITE"
}


export default function DashboardLayout({children}:{children:React.ReactNode}){
    return(
        <>
        <h1>Header do DASHBOARD</h1>
        <br/>
        {children}
        </>
    )
}
