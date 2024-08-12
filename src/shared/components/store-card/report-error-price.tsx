import { useTranslations } from "next-intl";

import { Button, Label, Textarea } from "@/shared/ui";

export const ReportErrorPrice = () => {
  const t = useTranslations("Globals");

  return (
    <div className="space-y-4">
      <div className="grid w-full gap-2">
        <Label className="text-labelMedium" htmlFor="message">
          {t("anonymousDescription")}
        </Label>
        <Textarea
          rows={7}
          className="resize-none rounded-xl"
          placeholder={t("enterYourDescription")}
          id="message"
        />
      </div>
      <Button className="h-[52px] rounded-xl text-labellarge" fullWidth>
        {t("submit")}
      </Button>
    </div>
  );
};
