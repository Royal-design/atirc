import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import React from "react";
import { useLocation, Link } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadCrumbsProps {
  homeLinkColor?: string;
  separatorColor?: string;
  linkColor?: string;
  activeLinkColor?: string;
  activeLinkFontWeight?: string;
  className?: string;
  scrollToTop?: boolean;
}

const BreadCrumb: React.FC<BreadCrumbsProps> = ({
  separatorColor = "text-gray-400",
  linkColor = "text-current",
  activeLinkColor = "text-red-500",
  activeLinkFontWeight = "font-semibold",
  className = "",
  scrollToTop = true
}) => {
  const location = useLocation();
  const segments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  const handleClick = () => {
    if (scrollToTop) {
      window.scrollTo(0, 0);
    }
  };

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const name =
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
    return { name, href };
  });

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator className={separatorColor} />
            {index !== breadcrumbs.length - 1 ? (
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    to={breadcrumb.href}
                    className={linkColor}
                    onClick={handleClick}
                  >
                    {breadcrumb.name}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbPage
                  className={`${activeLinkColor} ${activeLinkFontWeight}`}
                >
                  {breadcrumb.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
