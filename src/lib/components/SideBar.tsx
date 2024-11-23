import { sideBarItems } from "../utils/constants";
import { SideBarTag } from "./Tag";

const SideBar = () => {
  return (
    <div className="px-4 py-4 flex sm:flex-col gap-y-3 overflow-x-auto sm:w-2/6">
      {sideBarItems.map((item, index) => (
        <SideBarTag key={index} active={item.label === "recent"}>
          {item.label}
        </SideBarTag>
      ))}

      {/* <button className="border-2 rounded-full border-fuchsia-500 px-2 py-1">
            Recents
          </button> */}
    </div>
  );
};

export default SideBar;
