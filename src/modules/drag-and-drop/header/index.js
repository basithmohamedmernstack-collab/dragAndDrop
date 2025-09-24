import CustomMenu from "../../utils/custom-components/Menu";

const Header = ({
  nameList = [],
  ageList = [],
  cityList = [],
  setFilters,
  filters = {},
}) => {
  return (
    <div className="app-header">
      <CustomMenu
        items={nameList}
        setFilters={setFilters}
        menuKey={"name"}
        filters={filters}
      />
      <CustomMenu
        items={ageList}
        setFilters={setFilters}
        menuKey={"age"}
        filters={filters}
      />
      <CustomMenu
        items={cityList}
        setFilters={setFilters}
        menuKey={"city"}
        filters={filters}
      />
    </div>
  );
};

export default Header;
