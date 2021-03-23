import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import * as esbuild from 'esbuild-wasm';

const App = () => {
  //-hooks
  const ref = useRef<any>();
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  //- Transpiler :
  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      //- fetch the bundle from the public folder
      wasmURL: '/esbuild.wasm',
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const onClick = async () => {
    if (!ref.current) {
      return;
    }

    const result = await ref.current.transform(input, {
      loader: 'jsx',
      target: 'es2015',
    });

    setCode(result.code);
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
