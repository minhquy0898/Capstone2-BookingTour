import UserManage from "../../Components/UserManage/UserManage";
import UserOption from "../../Components/UserOption/UserOption";

const UserAccount = () => {
  return (
    <div className="flex justify-center bg-[#EDEDED]">
      <div className=" mr-20">
        <UserOption />
      </div>
      <div>
        <UserManage />
      </div>
    </div>
  );
};

export default UserAccount;
