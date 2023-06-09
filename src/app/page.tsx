import Counter from "@/features/counter/Counter"
import Header from "@/components/header"
import ClientSideIndicator from "@/components/ClientSideIndicator"

export default function Home() {
  return (
    <main className="container-5xl">
      <Header />

      <div className="flex flex-col items-center justify-center h-[60vh] border-blue-500 border-[1px] relative">
        {/* This is only use to indicate clientside tag in ui  */}
        <ClientSideIndicator label="server side" />

        <h2 className="text-8xl font-semibold mb-5"> Redux Store</h2>

        <h2 className="text-center max-w-[580px] mb-2">
          {`Next js 13 app Router default using Server Side Components and how we can set up the redux store in Next Js 13?`}
        </h2>

        <div className="flex gap-5 font-semibold text-gray-800">
          <a className="underline">Blog</a>
          <span>|</span>
          <a className="underline"> Github</a>
        </div>

        <div className="relative mt-20 p-10 border-red-500 border-[1px]">
          <ClientSideIndicator label="clientSide" />

          <Counter />
        </div>
      </div>
    </main>
  )
}
