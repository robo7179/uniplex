import Tile from "./_components/Tile"

export default async function Dashboard(){
    return(
        <><div className="text-xl px-6 py-3">
            <strong>Companies</strong>
        </div>
        <Tile Company_name="google" quesno="40" />
        </>
    )
}