import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect, useState } from "react";

import QRCode from "../assets/images/qrcode.png";

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
      <h1>La Fabrique à Balises</h1>
      <ul ref={animationParent} className="grid">
        <li>
          <figure>
            <img src={QRCode} alt="factory.codecollectif.fr" width="200" />
            <figcaption>⮉ scan me ⮉</figcaption>
          </figure>
        </li>
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
