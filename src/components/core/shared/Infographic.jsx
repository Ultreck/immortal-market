import React, { useRef } from 'react';
import { useMount } from 'react-use';

const Infographic = ({ type, data, dynamic = false }) => {
  const root = useRef(null);
  const widget = useRef(null);

  useMount(() => {
    if (widget.current || !window['SsWidget']) return;
    const SsWidget = { ...window['SsWidget'] };
    widget.current = SsWidget.init({
      root: root.current,
      data: { type, dynamic, ...data },
    });
  });

  return <div ref={root}></div>;
};

export default Infographic;
