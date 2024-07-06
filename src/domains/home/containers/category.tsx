import Image from "next/image"

export function Category() {
  return (
    <section className="px-4 py-3">
      <div className="flex items-center justify-between">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="flex flex-col items-center gap-x-4 gap-y-[6px]" key={index}>
            <Image src="/images/box.png" width={63} height={63} alt="category" />
            <p className="text-xs font-medium text-content-primary">آکبند</p>
          </div>
        ))}
      </div>
    </section>
  )
}
