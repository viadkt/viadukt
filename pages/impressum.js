import Button from "../components/ui/button"

export default function Impresssum() {
    return (

        <div className="grid grid-cols-2  container mx-auto items-center h-screen gap-4 p-4  ">
            <div>
                <h1 className="text-4xl font-bold">Impresssum</h1>
                <p>
                    <a href="index.html"><b>viadukt GmbH</b></a><br />
                    Pascal Biesenbach<br /> Moritz Windmann<br /> Johann Rohn<br /><br />
                    Senefelderstr. 34A<br /> 42117 Wuppertal<br /> post@viadukt.de<br />
                    www.viadukt.de<br /><br />
                    Stadtsparkasse Wuppertal<br />DE89 3305 0000 0000 1295 28<br />WUPSDE33XXX<br /><br />
                    USt-ID DE349460486<br />
                    St.-Nr. 132/5950/1357<br />
                    Finanzamt Wuppertal Elberfeld<br /> Amtsgericht Wuppertal<br /> HRB 32326<br />
                </p>
            </div>
            <div className="fixed top-4 right-4">
                <Button href="/" > Zur Startseite </Button>
            </div>
        </div>


    )
}