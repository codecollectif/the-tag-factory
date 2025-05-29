import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect, useState } from "react";

import AuthForm from "../components/AuthForm";
import BurgerMenu from "../components/BurgerMenu";
import { useElements } from "../components/ElementContext";

function ItemList() {
  const [animationParent] = useAutoAnimate();

  const { elements } = useElements();

  const [allElements, setAllElements] = useState(elements);

  useEffect(() => {
    const eventSource = new EventSource("/api/elements/events");

    const onNewElement = (event: MessageEvent) => {
      setAllElements([JSON.parse(event.data), ...allElements]);
    };

    eventSource.addEventListener("newElement", onNewElement);

    return () => {
      eventSource.removeEventListener("newElement", onNewElement);
    };
  }, [allElements]);

  return (
    <>
      <header>
        <BurgerMenu>
          <AuthForm />
        </BurgerMenu>
      </header>
      <h1>La Fabrique à Balises</h1>
      <ul ref={animationParent} className="grid">
        {allElements.map((element) => (
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
