import { Input, Select, Option } from "@material-tailwind/react";
import { useState } from "react";

const Navbar = ({ onSearch }) => {

  const [search, setSearch] = useState("");
  console.log(search);
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    onSearch(inputValue);
  }

  return (
    <>
      <nav className="w-full h-[75px] backdrop-blur-sm flex items-center justify-center">
        <div className="w-[95%] h-full rounded-md bg-[#f4f4fd] shadow-md">
          <div className="w-[60%] h-full ml-10 flex justify-between items-center">
            <div className="w-[45%] h-[80%] flex items-center">
              <Input onChange={handleChange} label="Search" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2c2a2a" viewBox="0 0 256 256"><path d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z" opacity="0.2"></path><path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>} />
            </div>
            <div className="w-[25%] h-[80%] flex items-center">
                <Select style={{border: 'none', outline: 'none'}} size="md" label="Relevance">
                    <Option>Option 1</Option>
                    <Option>Option 2</Option>
                    <Option>Option 3</Option>
                    <Option>Option 4</Option>
                </Select>
            </div>
            <div className="w-[25%] h-[80%] flex items-center">
                <Select style={{border: 'none', outline: 'none'}} size="md" label="All Brands">
                    <Option>Option 1</Option>
                    <Option>Option 2</Option>
                    <Option>Option 3</Option>
                    <Option>Option 4</Option>
                </Select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
