import PropTypes from "prop-types";

const ProvinciaList = ({ results }) => {
  return (
    <ul>
      {results &&
        results.length > 0 &&
        results.map((city) => (
          <li key={city.CODPROV}>{city.NOMBRE_PROVINCIA}</li>
        ))}
    </ul>
  );
};

ProvinciaList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      CODPROV: PropTypes.number.isRequired,
      NOMBRE_PROVINCIA: PropTypes.string.isRequired,
    })
  ),
};

export default ProvinciaList;
