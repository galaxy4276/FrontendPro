import React, { useState, CSSProperties, useRef } from 'react';
import PlusSvg from './PlusSvg';
import ReconcileMaxHeightElement from '../utils/ReconcileMaxHeightElement';

interface Props {
  title: string;
  textContent: string;
  className?: string;
}

const Accordion: React.FC<Props> = ({ title, textContent, className  }) => {
  const [isShowTextContent, setIsShowTextContent] = useState<boolean>(false);
  const contentSectionRef = useRef<HTMLDivElement>(null);
  const onClickButton = () => {
    setIsShowTextContent(bool => !bool);
    const maxHeightReconciler = new ReconcileMaxHeightElement(contentSectionRef);
    maxHeightReconciler.reconcile();
  };

  const adjustedTitleFontCSS: CSSProperties = {
    fontWeight: isShowTextContent ? 'bold' : 'normal',
  };

  return (
    <div className={`accordion base-font ${className}`}>

      <section className="accordionTitleSection">
        <span style={adjustedTitleFontCSS}>{title}</span>
        <button
          type="button"
          onClick={onClickButton}
          className={isShowTextContent ? 'button-rotate' : ''}
        >
          <PlusSvg />
        </button>
      </section>

      <section className="accordionContentSection" ref={contentSectionRef}>
        <span>{textContent}</span>
      </section>

    </div>
  );
};

export default Accordion;
