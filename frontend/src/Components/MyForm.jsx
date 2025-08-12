import React, { useState } from "react";
import Dropdwn from "./Dropdwn";
import Counter from "./Counter";
import axios from "axios";

function MyForm() {
  const [formSets, setFormSets] = useState([
    { selectedOption: "", subType: "", selectedOpt: "", count: 0 }
  ]);

  const [result, setResult] = useState(null);

  const addNewSet = () => {
    setFormSets([
      ...formSets,
      { selectedOption: "", subType: "", selectedOpt: "", count: 0 }
    ]);
  };

  const updateValue = (index, field, value) => {
    const updated = [...formSets];
    updated[index][field] = value;

    if (field === "selectedOption") {
      updated[index]["subType"] = "";
    }

    setFormSets(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/pricing/calculate",
        formSets
      );
      setResult(response.data);
      setFormSets([{ selectedOption: "", subType: "", selectedOpt: "", count: 0 }]);
    } catch (error) {
      console.error("Error calculating cost:", error);
    }
  };

  const getSubtypeOptions = (type) => {
    switch (type) {
      case "Compute":
        return ["VM", "Container", "Function"];
      case "Database":
        return ["MySQL", "PostgreSQL", "MongoDB"];
      case "Storage":
        return ["HDD", "SSD", "ObjectStorage"];
      default:
        return [];
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "900px",
        margin: "70px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {formSets.map((set, index) => (
        <div
          key={index}
          style={{
            background: "linear-gradient(135deg, #f3e5f5, #e1bee7)",
            padding: "30px",
            borderRadius: "15px",
            marginBottom: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.2s ease-in-out",
            borderLeft: "6px solid #8e24aa"
          }}
        >
          <h3 style={{ color: "#6a1b9a", marginBottom: "15px" }}>
            Resource Set {index + 1}
          </h3>

          <Dropdwn
            type="Resource Type"
            a="Compute"
            b="Database"
            c="Storage"
            selectedOption={set.selectedOption}
            setSelectedOption={(val) => updateValue(index, "selectedOption", val)}
          />

          {set.selectedOption && (
            <Dropdwn
              type="Subtype"
              a={getSubtypeOptions(set.selectedOption)[0]}
              b={getSubtypeOptions(set.selectedOption)[1]}
              c={getSubtypeOptions(set.selectedOption)[2]}
              selectedOption={set.subType}
              setSelectedOption={(val) => updateValue(index, "subType", val)}
            />
          )}

          <Dropdwn
            type="Region"
            a="us-east"
            b="us-west"
            c="asia-south"
            selectedOption={set.selectedOpt}
            setSelectedOption={(val) => updateValue(index, "selectedOpt", val)}
          />

          <Counter
            count={set.count}
            setCount={(val) => updateValue(index, "count", val)}
          />
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          type="button"
          onClick={addNewSet}
          style={{
            background: "linear-gradient(45deg, #ab47bc, #8e24aa)",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "25px",
            cursor: "pointer",
            marginRight: "10px",
            fontSize: "16px",
            boxShadow: "0 3px 6px rgba(0,0,0,0.2)"
          }}
        >
          Add Resource
        </button>
        <button
          type="submit"
          style={{
            background: "linear-gradient(45deg, #6a1b9a, #4a148c)",
            color: "white",
            border: "none",
            padding: "10px 25px",
            borderRadius: "25px",
            cursor: "pointer",
            fontSize: "16px",
            boxShadow: "0 3px 6px rgba(0,0,0,0.2)"
          }}
        >
           Calculate Cost
        </button>
      </div>

      {result && (
        <div
          style={{
            marginTop: "30px",
            padding: "25px",
            background: "linear-gradient(135deg, #ede7f6, #d1c4e9)",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
          }}
        >
          <h3 style={{ color: "#4a148c" }}>Estimated Monthly Cost</h3>
          <h2 style={{ color: "#6a1b9a", fontSize: "2rem" }}>
            ${result.totalCost}
          </h2>
          <h4>Breakdown:</h4>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "10px",
              whiteSpace: "pre-wrap",
              border: "1px solid #ccc"
            }}
          >
            {result.breakdown}
          </pre>
        </div>
      )}
    </form>
  );
}

export default MyForm;
