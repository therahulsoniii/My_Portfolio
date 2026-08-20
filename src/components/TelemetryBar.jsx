import React, { useState, useEffect } from 'react';
import { Activity, Gauge, Compass, Radio, Cpu, BatteryCharging } from 'lucide-react';

export default function TelemetryBar() {
  const [pitch, setPitch] = useState(42.5);
  const [velocity, setVelocity] = useState(27850);
  const [altitude, setAltitude] = useState(408.3);

  useEffect(() => {
    const interval = setInterval(() => {
      setPitch((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
      setVelocity((prev) => Math.round(prev + (Math.random() * 10 - 5)));
      setAltitude((prev) => +(prev + (Math.random() * 0.1 - 0.05)).toFixed(1));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { label: 'PITCH ANGLE', value: `${pitch}°`, icon: Compass, color: 'var(--color-cyan)' },
    { label: 'VELOCITY', value: `${velocity.toLocaleString()} KM/H`, icon: Gauge, color: 'var(--color-purple)' },
    { label: 'ORBIT ALTITUDE', value: `${altitude} KM`, icon: Activity, color: 'var(--color-orange)' },
    { label: 'COMM LINK', value: 'ACTIVE [99.4%]', icon: Radio, color: '#10b981' },
    { label: 'PROPULSION', value: 'NOMINAL', icon: Cpu, color: 'var(--color-cyan)' },
    { label: 'POWER CORE', value: '100% SOLAR', icon: BatteryCharging, color: '#10b981' },
  ];

  return (
    <div
      style={{
        background: 'rgba(5, 8, 20, 0.75)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(0, 243, 255, 0.2)',
        borderBottom: '1px solid rgba(0, 243, 255, 0.2)',
        padding: '0.85rem 1.5rem',
        width: '100%',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1rem',
        }}
      >
        {metrics.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderRight: idx !== metrics.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                paddingRight: '0.5rem',
              }}
            >
              <IconComponent size={20} color={item.color} />
              <div>
                <div
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: 'var(--font-code)',
                    color: '#94a3b8',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-subheading)',
                    fontWeight: 700,
                    color: '#ffffff',
                  }}
                >
                  {item.value}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
