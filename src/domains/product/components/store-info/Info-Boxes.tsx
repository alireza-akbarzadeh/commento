function InfoBox({ text }: { text: string }) {
  return (
    <div className="bg-surface-secondary p-1.5 px-2">
      <p className="text-bodyXSmall text-content-tertiary">{text}</p>
    </div>
  );
}

export function InfoBoxes() {
  return (
    <div className="flex gap-2 pb-[12px] pt-2.5">
      <InfoBox text="اوپنباکس" />
      <InfoBox text="تحویل فوری" />
      <InfoBox text="ارسال رایگان" />
      <InfoBox text="پرداخت در محل" />
    </div>
  );
}
