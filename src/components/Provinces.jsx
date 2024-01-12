import PropTypes from "prop-types";

const ProvinciaList = ({ results }) => {
  const obtenerSimboloPorId = (description) => {
    switch (description) {
      case "Despejado":
        return <img src="../../src/assets/sol.gif" alt="" />;
      case "Nubes altas":
        return <img src="../../src/assets/nublado.gif" alt="" />;
        case "Poco nuboso":
          return <img src="../../src/assets/pocasNubes.gif" alt="" />;
      default:
        return "Símbolo predeterminado";
    }
  };

  return (
    <ul>
      {results &&
        results.length > 0 &&
        results.map((city) => (
          <div key={city.id}>
            <li>{city.name}</li>
            <li>{city.stateSky.description}</li>
            <p>Símbolo: {obtenerSimboloPorId(city.stateSky.description)}</p>
            <li>{city.temperatures.max}</li>
            <li>{city.temperatures.min}</li>
          </div>
        ))}
    </ul>
  );
};

ProvinciaList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      temperatures: PropTypes.object.isRequired,
      stateSky: PropTypes.object.isRequired,
    })
  ),
};

export default ProvinciaList;
