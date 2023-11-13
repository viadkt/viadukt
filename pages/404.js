import Button from "/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4  p-4">
            <h1 className="text-4xl font-bold">404 - Seite nicht gefunden</h1>
            <p className="text-2xl font-semibold">Die Seite die du suchst existiert nicht</p>
            <Button href="/" > Zur Startseite </Button>
        </div>
    )
}