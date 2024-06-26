import columnStyles from "@/styles/columnStyles.module.css"
export default function Home() {
  return (
    <>
      <div className={`col-span-2 ${columnStyles["first-layer-column"]}`}>
        Olha
      </div>
      <div className={`col-span-8 ${columnStyles["first-layer-column"]}`}>
        A
      </div>
      <div className={`col-span-2 ${columnStyles["first-layer-column"]}`}>
        Bomba
      </div>
    </>
  )
}
