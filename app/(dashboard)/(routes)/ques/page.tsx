import Head from 'next/head'
import style from "app/(dashboard)/(routes)/questions/_components/bootstrap.min.module.css"

interface quesprops{
    Company_name:"string";
}





export default async function Dashboard({Company_name,}:quesprops){
    return(
        <>
        <Head>
        <link
          rel="stylesheet"
          href="app/(dashboard)/(routes)/questions/_components/bootstrap.min.module.css"
        ></link>
        </Head>
        <header>
            <strong><h1>{Company_name}</h1></strong>
        </header>
        <div className='my-5'></div>
        <div className='container mx-auto px-4 '>
            <div className="bg-gray-200 border border-gray-400 rounded p-4 ">
                <p>q1</p>
                <p> ans1</p>
            </div>
        </div>
        <div className='my-5'></div>
        <div className='container mx-auto px-4 '>
            <div className="bg-gray-200 border border-gray-400 rounded p-4 ">
                <p>q1</p>
                <p> ans1</p>
            </div>
        </div>
        </>
    );
}