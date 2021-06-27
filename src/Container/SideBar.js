import { Fragment } from "react";
import { Badge } from "react-bootstrap";

function SideBar(props) {
  const {
    filterProducts,
    filters: { sizes: sizeFilter },
    currentFilter: { size: appliedSizeFilter = [] },
  } = props;
  return (
    <Fragment>
      <div className="">
        <p>
          <strong>Sizes:</strong>
        </p>
        <div>
          {sizeFilter &&
            sizeFilter.map((size, index) => {
              return (
                <a
                  href="#"
                  className="filter-link"
                  onClick={() => filterProducts({ key: "size", value: size })}
                  key={index}
                >
                  <Badge
                    variant={
                      appliedSizeFilter.includes(size.toLowerCase())
                        ? "dark"
                        : "light"
                    }
                  >
                    {size}
                  </Badge>
                </a>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
}

export default SideBar;
