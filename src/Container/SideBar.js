import { Button } from "react-bootstrap";

function SideBar(props) {
  const {
    filterProducts,
    filters: { sizes: sizeFilter },
  } = props;
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
