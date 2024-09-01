type AllStoreType = {
  handleToggleClick: (state: "all" | "one" | "none") => void;
};
type DrawerAction = "all" | "one" | "drag" | "none";

type BottomSheetStoreType = {
  drawerAction: DrawerAction;
  handleToggleClick: (state: DrawerAction) => void;
};
type StoreMapProps = AllStoreType;

export type { AllStoreType, BottomSheetStoreType, DrawerAction, StoreMapProps };
