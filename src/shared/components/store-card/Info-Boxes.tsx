export function InfoBoxes() {
    const items = ['ارسال رایگان ', 'اوپنباکس', 'تحویل فوری ', 'پرداخت در محل'];
    return (
        <div className="flex gap-2 pb-[12px] pt-2.5 flex-wrap">
            {items.map((text) => (
                <div className="bg-surface-secondary p-1.5 px-2" key={text}>
                    <p className="text-nowrap text-content-tertiary text-bodyXSmall">
                        {text}
                    </p>
                </div>
            ))}
        </div>
    );
}
