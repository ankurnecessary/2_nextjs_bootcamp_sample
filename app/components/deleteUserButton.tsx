import { deleteUser } from "../actions";

const DeleteUserButton = ({userId}:{userId: number}) => {
  return (
    <form action={deleteUser}>
      <input type="hidden" name="userId" defaultValue={userId} />
      <button
        type="submit"
        className="underline text-blue-500"
      >
        Delete
      </button>
    </form>
  );
};

export default DeleteUserButton;
