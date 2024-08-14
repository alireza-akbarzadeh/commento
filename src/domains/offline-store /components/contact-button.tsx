import { Icon, Svg } from "@/shared/components";
import { Button } from "@/shared/ui";

export function ContactButtons() {
  const phoneNumber = "tel:123-456-7890";

  return (
    <div className="flex gap-3 py-2">
      <Button
        fullWidth
        className="flex h-14 items-center gap-2 rounded-2xl"
        onClick={() => (window.location.href = phoneNumber)}
      >
        <Icon iconClassName="text-content-inverse" name="call-righ" />
        <span>تماس با فروشگاه</span>
      </Button>
      <Button
        onClick={() => window.open("https://instagram.com", "_blank")}
        variant="tertiary"
        fullWidth
        className="flex h-14 items-center gap-2 rounded-2xl"
      >
        <Svg path="instagram" alt="instagram" size={6} />
        <span>اینستاگرام</span>
      </Button>
    </div>
  );
}
