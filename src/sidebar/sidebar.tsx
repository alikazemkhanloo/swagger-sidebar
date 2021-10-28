import React, {
  ReactElement,
  ReactEventHandler,
  useEffect,
  useState,
} from "react";
import styles from "../style.scss";

function Sidebar() {
  const [sections, setSections] = useState<Element[]>([]);
  let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const s = Array.from(document.querySelectorAll(".opblock-tag-section"));
      setSections(s);
      observer.disconnect();
    });
  });

  useEffect(() => {
    const loading = document.querySelector("div.loading-container") as Element;
    if (loading) observer.observe(loading, { childList: true });
    else {
      const s = Array.from(document.querySelectorAll(".opblock-tag-section"));
      setSections(s);
    }
  }, []);
  const onClick: ReactEventHandler = ({ currentTarget }) => {
    const nextSibling = currentTarget.nextSibling as Element;
    if (nextSibling.classList.contains("open")) {
      nextSibling.classList.remove("open");
      nextSibling.classList.add("close");
    } else {
      nextSibling.classList.remove("close");
      nextSibling.classList.add("open");
    }
  };

  return (
    <nav id="nav">
      <ul className="nav swagger-ui">
        {sections.map((section) => {
          const sectionTag = section.querySelector(".opblock-tag");
          const title = sectionTag?.textContent?.trim() || "";
          const subsections = Array.from(section.querySelectorAll(".opblock"));

          return (
            <li className="section">
              <div className="sectionTitle" onClick={onClick}>
                {title}
              </div>
              <ul className="parts close">
                {subsections.map((subsection) => {
                  const method = subsection
                    .querySelector(".opblock-summary-method")
                    ?.textContent?.trim();
                  const path = subsection
                    .querySelector(".opblock-summary-path")
                    ?.textContent?.trim();
                  const id = subsection.id;
                  const description = id.split("-")[2];
                  return (
                    <li className="part">
                      <a
                        className={`link opblock opblock-${method?.toLowerCase()}`} // opblock class is a trick to get colors from swagger
                        href={`#${id}`}
                      >
                        <div className="method">
                          <p className="opblock-summary-method">{method}</p>
                        </div>
                        <div>
                          <div className="partPath">
                            <code>{path}</code>
                          </div>
                          {/* <div className="partDescription">{description}</div> */}
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;
