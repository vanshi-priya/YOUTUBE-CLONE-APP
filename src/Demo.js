import React, {useState} from 'react';

const Demo = () => {
 const [text, setText] = useState("");
 const [isDarkTheme] = useState(true);

  return (
    <div className={"m-4 p-2 w-96 h-96 border border-black" + (isDarkTheme && "bg-black-900 text-white")}>
        <div>
      <input className="border border-black w-72 px-2" type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>

      <div>
        nth Prime
      </div>
    </div>
  )
};

export default Demo;
