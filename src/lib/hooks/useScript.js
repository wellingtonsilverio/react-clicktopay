import React from "react";

const useScript = (src, name, options = {}) => {
    const [status, setStatus] = React.useState(src ? 'loading' : 'idle');
    const [lib, setLib] = React.useState();
  
    React.useEffect(() => {
      if (!src) {
        setStatus('idle');
        return;
      }
  
      let script = document.querySelector(`script[src="${src}"]`);
  
      if (!script) {
        script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => setLib({ [name]: window[name] })
        script.setAttribute('data-status', 'loading');
        if (options) {
          for (const option in options) {
            script[option] = options[option];
          }
        }
        document.body.appendChild(script);
  
        const setDataStatus = event => {
          script.setAttribute(
            'data-status',
            event.type === 'load' ? 'ready' : 'error'
          );
        };
        script.addEventListener('load', setDataStatus);
        script.addEventListener('error', setDataStatus);
      } else {
        setStatus(script.getAttribute('data-status'));
      }
  
      const setStateStatus = event => {
        setStatus(event.type === 'load' ? 'ready' : 'error');
      };
  
      script.addEventListener('load', setStateStatus);
      script.addEventListener('error', setStateStatus);
  
      return () => {
        if (script) {
          script.removeEventListener('load', setStateStatus);
          script.removeEventListener('error', setStateStatus);
        }
      };
    }, [src]);
  
    return [ status, lib ];
  };

  export default useScript;