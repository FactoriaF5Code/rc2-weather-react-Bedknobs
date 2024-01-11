import { useState } from "react";

function Browser() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Municipio..."
        name="townSearch"
        value={text}
        onChange={handleChange}
        id="search"
      />
    </div>
  );
}

export default Browser;
