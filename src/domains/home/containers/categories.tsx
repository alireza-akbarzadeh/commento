import { CategoryRow } from "../components";

export function Categories() {
  return (
    <section className="bg-content-inverse pb-6 pt-2">
      <div className="py-2 pr-4">
        <h3 className="text-labellarge">دسته‌بندی‌ها</h3>
      </div>
      {Array.from({ length: 3 }).map((_, index) => (
        <CategoryRow key={index} />
      ))}
    </section>
  );
}
