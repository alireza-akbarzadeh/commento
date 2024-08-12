import { Button } from "@/shared/ui";

import { AddressInformation, SearchBoxProps, searchType } from "../map-types";

type MapSubmitFormProps = {
  isShowSearch?: boolean;
  searchProps?: SearchBoxProps;
  addressInformation?: AddressInformation;
  handleChangeSearch?: (value: searchType) => void;
  loading?: boolean;
  onNextStep?: () => Promise<void>;
  nextStateDisabled?: boolean;
};

export const MapSubmitForm = (props: MapSubmitFormProps) => {
  const { loading, nextStateDisabled, onNextStep } = props;
  return (
    <div
      className="z-20 overflow-hidden"
      style={{
        borderRadius: "20px 20px 0 0 ",
        overflow: "hidden",
        zIndex: 2,
        marginTop: "-40px !important",
      }}
    >
      {/* render a show search components here */}
      <Button
        loading={loading}
        onClick={onNextStep}
        type="submit"
        className="rounded-full"
        disabled={nextStateDisabled}
      >
        ثبت و ادامه
      </Button>
    </div>
  );
};
