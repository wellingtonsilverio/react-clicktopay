import React from "react";

const useLink = (href, options = {}) => {
    const [status, setStatus] = React.useState(href ? 'loading' : 'idle');
  
    React.useEffect(() => {
      if (!href) {
        setStatus('idle');
        return;
      }
  
      let link = document.querySelector(`link[href="${href}"]`);
  
      if (!link) {
        link = document.createElement('link');
        link.href = href;
        link.rel = "stylesheet";
        link.setAttribute('data-status', 'loading');
        if (options) {
          for (const option in options) {
            link[option] = options[option];
          }
        }
        document.body.appendChild(link);
  
        const setDataStatus = event => {
          link.setAttribute(
            'data-status',
            event.type === 'load' ? 'ready' : 'error'
          );
        };
        link.addEventListener('load', setDataStatus);
        link.addEventListener('error', setDataStatus);
      } else {
        setStatus(link.getAttribute('data-status'));
      }
  
      const setStateStatus = event => {
        setStatus(event.type === 'load' ? 'ready' : 'error');
      };
  
      link.addEventListener('load', setStateStatus);
      link.addEventListener('error', setStateStatus);
  
      return () => {
        if (link) {
          link.removeEventListener('load', setStateStatus);
          link.removeEventListener('error', setStateStatus);
        }
      };
    }, [href]);
  
    return [ status ];
  };

  export default useLink;