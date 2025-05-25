import { useElements } from "./ElementContext";

function ElementDeleteForm() {
  const { deleteElement } = useElements();

  return (
    <form action={deleteElement}>
      <button type="submit">Supprimer</button>
    </form>
  );
}

export default ElementDeleteForm;
