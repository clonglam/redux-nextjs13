import Counter from "@/features/counter/Counter"
import styles from "./page.module.css"
import Header from "@/components/header"
import ClientSideIndicator from "@/components/ClientSideIndicator"

export default function Home() {
  return (
    <main className="container-5xl">
      <Header />

      <div className="flex flex-col items-center justify-center h-[60vh] border-blue-500 border-[0px] relative">
        {/* This is only use to indicate clientside tag in ui  */}
        {/* <ClientSideIndicator label="client" /> */}
        <h2 className="text-8xl font-semibold"> Click the Counter</h2>

        <h2 className="text-center ">
          {` This component body is using server side render even it is wraped by a
        "useClient" wrapper redux wraper`}
        </h2>

        <div className="relative mt-20 p-10 border-red-500 border-[0px]">
          {/* <ClientSideIndicator label="serverSide" /> */}

          <Counter />
        </div>
      </div>
    </main>
  )
}
