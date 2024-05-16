import Head from 'next/head'
import Tile from "./_components/Tile"
import style from "app/(dashboard)/(routes)/questions/_components/bootstrap.module.css";
export default async function Dashboard(){
    return(
        <>
        <Head>
            <link rel="stylesheet" href="app\(dashboard)\(routes)\questions\_components\bootstrap.min.module.css"></link>
        </Head>
        <div className="text-xl px-6 py-3">
            <strong>Companies</strong>
        </div>
        <div className='container'>
            <div className='row'>
            
                <Tile Company_name="google" quesno="40" />
                <Tile Company_name='sandihya' quesno='23' />
                <Tile Company_name='flipkart' quesno='89' />
                
            </div>
        
        </div>
        </>
    )
}