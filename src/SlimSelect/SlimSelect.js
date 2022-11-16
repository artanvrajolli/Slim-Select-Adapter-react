import React, { useEffect, useRef, useState } from "react";
import SlimSelect from "./slim-raw.js";


function SlimSelectAdapter({
  children,
  multiple,
  options,
  defaultValue,
  onSelectTarget,
  data = [],
  placeholder = ""
}) {
  options ??= {};
  multiple ??= false;
  onSelectTarget ??= () => {};
  data ??= [];
  defaultValue ??= null;
 
  const slimSelectorRef = useRef(null);
  const [slimState, setSlimState] = useState(null);
  useEffect(() => {
    initSlimSelect();
  }, []);

  useEffect(() => {
    return ()=>{
      slimState?.slim?.destroy();
    }
  }, [slimState?.slim]);

  useEffect(()=>{
    if(!slimState?.slim) return;
    if(data.length > 0){
      if(placeholder !== ""){
        data.unshift({text:placeholder, placeholder:true});
      }
      if(defaultValue !== null){
        data = data.map((item)=>{
          if(item.value === defaultValue){
            item["selected"] = true;
          }
          return item;
        });
      }
      slimState?.slim?.setData([
        ...data
      ]);
    }
  },[data,slimState?.slim]);

  function initSlimSelect(){
    var randoid = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    var slim = new SlimSelect({
      select: slimSelectorRef.current,
      deselectLabel: '<span class="red">✖</span>',
      onChange: (info) => {
        onSelectTarget(info);
      },
      ...options
    });
    var objectSLIM = {
      id: randoid,
      slim: slim
    };
    setSlimState(objectSLIM);
  }
  return (
    <>
      <select
        ref={slimSelectorRef}
        className="vd-selecte-r2"
        multiple={multiple}
      >{children}</select>
    </>
  );
}

export default SlimSelectAdapter;
