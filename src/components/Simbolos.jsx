export const simbolo = (description) => {
  switch (description) {
    case "Despejado":
      return <img src="../../src/assets/wi-day-sunny.svg" alt="sol" />;
    case "Nubes altas":
      return <img src="../../src/assets/wi-cloudy.svg" alt="nubes" />;
    case "Poco nuboso":
    case "Intervalos nubosos":
      return <img src="../../src/assets/wi-day-cloudy.svg" alt="nubes y sol" />;
    case "Cubierto con lluvia":
    case "Nuboso con lluvia":
    case "Muy nuboso con lluvia":
    case "Intervalos nubosos con lluvia":
      return <img src="../../src/assets/wi-rain.svg" alt="lluvia" />;
    case "Cubierto con lluvia escasa":
    case "Muy nuboso con lluvia escasa":
    case "Intervalos nubosos con lluvia escasa":
      return <img src="../../src/assets/wi-rain-mix.svg" alt="lluvia escasa" />;
    default:
      return "Símbolo predeterminado";
  }
};
