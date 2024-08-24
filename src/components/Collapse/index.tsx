import { PropsWithChildren, useState } from "react";
import "./Collapse.scss";
import upArrow from "../../assets/up-arrow.png";

type CollapsePropsType = PropsWithChildren<{
  title: string;
  className?: string;
}>;

const Collapse: React.FC<CollapsePropsType> = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
   setIsOpen((state) => !state)
  };
  return (
    <article className={`collapse ${className === "market" ? "market" : ""}`}>
        <div className="collapse-title" onClick={() => toggle()}>
          <h2>{title}</h2>
          <span>
            <img
              className={`collapse-img ${
                isOpen? "down" : ""
              }`}
              src={upArrow}
              alt="fleche vers le bas"
            />
          </span>
        </div>
        <div
          className={`collapse-description ${
            isOpen? "show" : ""
          }`}
      >
        {children}
        </div>
      </article>
  )

}


export default Collapse;