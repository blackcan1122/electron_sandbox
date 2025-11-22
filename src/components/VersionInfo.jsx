import React, { useState, useEffect } from 'react';

function VersionInfo() {
  const [versions, setVersions] = useState({});

  useEffect(() => {
    if (window.versions) {
      setVersions({
        chrome: window.versions.chrome(),
        node: window.versions.node(),
        electron: window.versions.electron()
      });
    }
  }, []);

  return (
    <p style={{ color: '#666', fontSize: '14px' }}>
      Chrome: {versions.chrome} | Node: {versions.node} | Electron: {versions.electron}
    </p>
  );
}

export default VersionInfo;
