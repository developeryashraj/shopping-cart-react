import { Fragment } from "react";
import { Button, Badge } from "react-bootstrap";

function SideBar(props) {
  const {
    filterProducts,
    filters: { sizes: sizeFilter },
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
                  className="filter-link"
                  onClick={() => filterProducts({ key: "size", value: size })}
                  key={index}
                >
                  <Badge variant="secondary">{size}</Badge>
                </a>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
}

export default SideBar;
