import AuthForm from "../components/AuthForm";
import BurgerMenu from "../components/BurgerMenu";
import { useElements } from "../components/ElementContext";

function ItemList() {
  const { elements } = useElements();

  return (
    <>
      <header>
        <BurgerMenu>
          <AuthForm />
        </BurgerMenu>
      </header>
      <h1>La Fabrique à Balises</h1>
      <ul className="grid">
        {elements.map((element) => (
          <li
            key={element.id}
            // biome-ignore lint/security/noDangerouslySetInnerHtml: I take full responsibility (RG)
            dangerouslySetInnerHTML={{ __html: element.text }}
          />
        ))}
      </ul>
    </>
  );
}

export default ItemList;
