import Head from "next/head"
import style from "./bootstrap.module.css";
interface Tilesprops{
    Company_name:string;
    quesno:string;
}


export default function Tile({Company_name,quesno,}:Tilesprops) {
  return (
    <>
      <main> 
        <section className={style.tilescointainer}> 
            <div className={style.tile}> 
                <h2>{Company_name}</h2> 
                <p> 
                     {quesno} questions
                </p> 
            </div> 
            </section>
        </main>
    </>
  );
}
