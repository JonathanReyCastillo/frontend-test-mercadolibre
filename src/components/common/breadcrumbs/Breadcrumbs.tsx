import React from 'react';
import { BreadcrumbStyled } from '../../styled/common/breadcrumbs/BreadcrumbStyled';

const Breadcrumbs = (props: any) => {
  let breadcrumbs = [];

  if (props.breadcrumbs?.length > 0) {
    breadcrumbs = props.breadcrumbs?.map((breadcrumb: any) => {
      return (
        <li className="breadcrumb-item" key={breadcrumb}>
          {breadcrumb}
        </li>
      );
    });
  }

  return (
    <BreadcrumbStyled className="container">
      <ol className="breadcrumb">{breadcrumbs}</ol>
    </BreadcrumbStyled>
  );
};

export default Breadcrumbs;
