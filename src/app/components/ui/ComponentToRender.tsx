import { tokenRequiredI } from "../../../assets/images/image";
import { useUserAuthDetails } from "../../../store/authStore";
import { UserList } from "./UserList";

export const ComponentToRender = ({
  currentComponentId,
}: {
  currentComponentId: number;
}) => {
  const { modification_token } = useUserAuthDetails();

  const activeComponentId = currentComponentId;

  let RenderedComponent: JSX.Element | null = null;
  switch (activeComponentId) {
    case 0:
      RenderedComponent = <UserList />;
      break;
    default:
      RenderedComponent = <div>Default Component</div>;
      break;
  }

  return (
    <div>
      {modification_token?.length > 0 ? (
        RenderedComponent
      ) : (
        <div className="flex gap-10 justify-center flex-col items-center">
          <p className="text-lg text-white"> Votre token est requis</p>
          <img className=" w-[60%] md:w-[30%]" src={tokenRequiredI} />
        </div>
      )}
    </div>
  );
};
