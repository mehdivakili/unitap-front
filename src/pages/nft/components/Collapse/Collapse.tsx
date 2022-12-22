import Icon from 'components/basic/Icon/Icon';
import React, { useState } from 'react';

interface CollapseProps {
  title: string;
  icon: string;
  className?: string;
  children?: React.ReactNode;
}

const Collapse = ({ className, title, icon, children }: CollapseProps) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  return (
    <div className={`collapse overflow-y-hidden collapse-card w-full ${className}`}>
      <div
        onClick={() => {
          setIsCollapseOpen(!isCollapseOpen);
        }}
        className="collapse-content flex items-center cursor-pointer"
      >
        <Icon className="mr-7 ml-3" iconSrc={icon} height="28px" width="22px" />
        <p className="title"> {title} </p>
        <Icon
          className={`ml-auto transition-all duration-300 ${isCollapseOpen && 'rotate-180'}`}
          iconSrc="assets/images/nft/nft-collapse-arrow.svg"
          width="14px"
          height="auto"
        />
      </div>
      <div
        className={`overflow-y-hidden collapse__data ml-16 mr-6 ${isCollapseOpen ? 'open-collapse' : 'close-collapse'}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
