import React from "react";
import { Button } from "./components/Button";
import { Label } from "./components/Label";
import { Text } from "./components/Text";
import { Dropdown } from "./components/Dropdown";
import { Radio } from "./components/Radio";
import { Table } from "./components/Table";
import { HeroImage } from "./components/HeroImage";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>UI Garden Component Library</h1>

      <Button label="Click Me" />
      <Label text="Sample Label" />
      <Text text="Sample Text Component" />

      <Dropdown
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
        ]}
      />

      <Radio label="Radio Option" />

      <Table
        headers={["Name", "Age"]}
        rows={[
          ["Alice", 25],
          ["Bob", 30],
        ]}
      />

      <HeroImage
        src="https://picsum.photos/1200/400"
        title="Hero Image"
        alt="Hero"
      />
    </div>
  );
}

export default App;
