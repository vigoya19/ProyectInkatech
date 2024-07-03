import React, { useState, useMemo } from "react";
import "./Category.css";
import images from "../../assets/images"; // Importa todas las imágenes desde images.js

const products = [
  {
    id: 1,
    name: "Slip On Hombre Camelot",
    price: "$200.000",
    image: images.product1,
    size: ["5", "6", "7"],
    material: "Cuero",
    color: "Negro",
    technology: "HPO2Flex",
  },
  {
    id: 2,
    name: "Zapatilla Hombre Pelikan",
    price: "$250.000",
    image: images.product2,
    size: ["5.5", "6.5", "7.5"],
    material: "Nubuck",
    color: "Azul",
    technology: "BioBevel",
  },
  {
    id: 3,
    name: "Zapatilla Hombre Matrix",
    price: "$300.000",
    image: images.product3,
    size: ["6", "7", "8"],
    material: "Cuero",
    color: "Café",
    technology: "FlexGroove",
  },
  {
    id: 4,
    name: "Slip On Hombre Party",
    price: "$350.000",
    image: images.product4,
    size: ["5", "6.5", "8"],
    material: "Nubuck",
    color: "Oro",
    technology: "HPO2Flex",
  },
  {
    id: 5,
    name: "Sandalias Hombre Mild",
    price: "$150.000",
    image: images.product5,
    size: ["5.5", "7", "9"],
    material: "Cuero",
    color: "Negro",
    technology: "BioBevel",
  },
  {
    id: 6,
    name: "Zapatilla Hombre Alpha",
    price: "$400.000",
    image: images.product6,
    size: ["6.5", "7.5", "9.5"],
    material: "Cuero",
    color: "Azul",
    technology: "FlexGroove",
  },
  {
    id: 7,
    name: "Zapatilla Hombre Luton Speed",
    price: "$450.000",
    image: images.product7,
    size: ["5", "6", "7.5"],
    material: "Nubuck",
    color: "Café",
    technology: "HPO2Flex",
  },
  {
    id: 8,
    name: "Slip On Hombre Caravan",
    price: "$200.000",
    image: images.product8,
    size: ["5.5", "6.5", "8.5"],
    material: "Cuero",
    color: "Oro",
    technology: "BioBevel",
  },
  {
    id: 9,
    name: "Slip On Hombre Riley Racket",
    price: "$300.000",
    image: images.product9,
    size: ["6", "7", "8.5"],
    material: "Nubuck",
    color: "Negro",
    technology: "FlexGroove",
  },
];

const Category = () => {
  const [selectedFilter, setSelectedFilter] = useState({
    type: null,
    value: null,
  });

  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (filterType, value) => {
    setSelectedFilter({ type: filterType, value: value });
    console.log(`Filter updated: ${filterType} = ${value}`);
  };

  const resetFilters = () => {
    setSelectedFilter({ type: null, value: null });
    setSearchQuery("");
    console.log("Filters reset");
  };

  const filteredProducts = useMemo(() => {
    let tempProducts = [...products];

    if (!selectedFilter.type && !searchQuery) {
      return tempProducts;
    }

    if (selectedFilter.type && selectedFilter.value) {
      if (selectedFilter.type === "price") {
        const [min, max] = selectedFilter.value.split("-").map(Number);
        tempProducts = tempProducts.filter((product) => {
          const price = parseInt(
            product.price.replace("$", "").replace(".", "")
          );
          return price >= min && price <= max;
        });
      } else {
        tempProducts = tempProducts.filter((product) =>
          product[selectedFilter.type].includes(selectedFilter.value)
        );
      }
    }

    if (searchQuery) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    console.log("Filtered Products:", tempProducts);
    return tempProducts;
  }, [selectedFilter, searchQuery]);

  return (
    <div className="category-container">
      <div className="category-header">
        <h1>CALZADO</h1>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={resetFilters}>Resetear Filtros</button>
      </div>
      <div className="category-content">
        <div className="category-filters">
          {["size", "price", "material", "color", "technology"].map(
            (filterType) => (
              <FilterSection
                key={filterType}
                filterType={filterType}
                options={getFilterOptions(filterType)}
                selectedFilter={selectedFilter}
                handleFilterChange={handleFilterChange}
              />
            )
          )}
        </div>
        <div className="products-section">
          <div className="sort-options">
            <span>Ordenar por</span>
            <select>
              <option>Fecha de lanzamiento</option>
              <option>Precio</option>
            </select>
          </div>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterSection = ({
  filterType,
  options,
  selectedFilter,
  handleFilterChange,
}) => {
  console.log(`Render FilterSection: ${filterType}`, options);
  return (
    <div className="filter-section">
      <h3>{capitalizeFirstLetter(filterType)}</h3>
      <div className="filter-options">
        {options.map((option) => (
          <span
            key={option}
            className={`filter-option ${
              selectedFilter.type === filterType &&
              selectedFilter.value === option
                ? "selected"
                : ""
            }`}
            onClick={() => handleFilterChange(filterType, option)}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

const getFilterOptions = (filterType) => {
  const options = {
    size: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5"],
    price: ["150000-300000", "300000-450000"],
    material: ["Cuero", "Nubuck"],
    color: ["Negro", "Azul", "Café", "Oro"],
    technology: ["HPO2Flex", "BioBevel", "FlexGroove"],
  };
  return options[filterType];
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default Category;
