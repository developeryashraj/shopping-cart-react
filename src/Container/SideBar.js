import filters from "../database/filters.json";
import { Button } from "react-bootstrap";

function SideBar(props) {
  const { sizes: sizeFilter } = filters;
  const { filterProducts } = props;
  return (
    <div>
      {sizeFilter &&
        sizeFilter.map((size, index) => {
          return (
            <Button
              variant="outline-secondary"
              onClick={() => filterProducts({ key: "size", value: size })}
              key={index}
            >
              {size}
            </Button>
          );
        })}
    </div>
  );
}

export default SideBar;
