import PropTypes from "prop-types";
import { simbolo } from "./Simbolos";

const ProvinciaList = ({ results }) => {
  return (
    <>
      {results &&
        results.length > 0 &&
        results.map((city) => (
          <div className="container" key={city.id}>
            <section className="weather">
              <div>
                <p className="cityName">{city.name}</p>
                <p className="description">{city.stateSky.description}</p>
              </div>
              <div>
                <p>Temperatura máxima:</p>
                <p className="maxTemperature">{city.temperatures.max}</p>
              </div>
              <div>
                <p>Temperatura mínima:</p>
                <p className="minTemperature">{city.temperatures.min}</p>
              </div>
            </section>
            <section>
            <p className="simbol">{simbolo(city.stateSky.description)}</p>
            </section>
          </div>
        ))}
    </>
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
