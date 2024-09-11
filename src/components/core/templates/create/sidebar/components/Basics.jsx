import { useState } from 'react';
import Texts from '@/components/core/templates/create/sidebar/components/design/Texts.jsx';
import Shapes from '@/components/core/templates/create/sidebar/components/design/Shapes.jsx';
import Frames from '@/components/core/templates/create/sidebar/components/design/Frames.jsx';
import Icons from '@/components/core/templates/create/sidebar/components/design/Icons.jsx';

const Basics = () => {
  const [view, setView] = useState('all');

  return (
    <>
      {view === 'all' && (
        <div className="space-y-8">
          <Texts />
          <Shapes mini onView={() => setView('shapes')} />
          <Frames mini onView={() => setView('frames')} />
          <Icons mini onView={() => setView('icons')} />
        </div>
      )}
      {view === 'shapes' && <Shapes onBack={() => setView('all')} />}
      {view === 'frames' && <Frames onBack={() => setView('all')} />}
      {view === 'icons' && <Icons onBack={() => setView('all')} />}
    </>
  );
};

export default Basics;
