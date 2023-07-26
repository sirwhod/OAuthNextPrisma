export default function CreatePost() {
  return (
    <form className="flex w-full flex-col gap-4">
      <h1>Deixe o seu Comentário!</h1>
      <textarea
        placeholder="Comentário"
        className="bg-zinc-900 text-zinc-300 border border-zinc-950 rounded-md placeholder-zinc-500 p-2"
      />
      <button className="bg-green-500 text-zinc-900 font-bold text-lg p-2 rounded-md border-none">
        Comentar
      </button>
    </form>
  )
}
