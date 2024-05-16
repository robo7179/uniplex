import Head from "next/head"
import style from "app/(dashboard)/(routes)/questions/_components/bootstrap.module.css";
import Image from 'next/image';
import Link from 'next/link'
interface Tilesprops{
    Company_name:string;
    quesno:string;
}


export default function Tile({Company_name,quesno,}:Tilesprops) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="app/(dashboard)/(routes)/questions/_components/bootstrap.min.module.css"
        ></link>
      </Head>
      <div className=".col-lg-2 .col-md-2 .col-sm-4 .col-xs-12">
        <section className={style.tilescontainer}>
          <Link href="/ques">
          <div className={style.tile}>
          <Image src="/questions/_components/icons8-google-logo-48.png"  alt="no_logo" width={100} height={100} />
            <h2>{Company_name}</h2>
            <p>{quesno} questions</p>
          </div>
          </Link>
        </section>
      </div>
    </>
  );
}
