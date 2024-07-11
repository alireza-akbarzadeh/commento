type SpecificItemProps = { title: string; subtitle: String };

export function SpecificItem(props: SpecificItemProps) {
  const { subtitle, title } = props;
  return (
    <div>
      <span className="text-bodySmall text-content-tertiary">{title}</span>
      <p className="text-labelMedium">{subtitle}</p>
    </div>
  );
}
