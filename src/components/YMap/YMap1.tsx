

const Ymap1 = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', border: "none", width: "100%", height: "100%" }}>
      <a
        href="https://yandex.by/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
      >
        Санкт‑Петербург
      </a>
      <a
        href="https://yandex.by/maps/2/saint-petersburg/house/angliyskaya_naberezhnaya_28/Z0kYdA5jQUIAQFtjfXVycnVlZQ==/?azimuth=6.25482380670322&ll=30.293878%2C59.933961&tilt=0.26053988419897295&utm_medium=mapframe&utm_source=maps&z=16.78"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
      >
        Английская набережная, 28 — Яндекс Карты
      </a>
      <iframe
        src="https://yandex.by/map-widget/v1/?azimuth=6.25482380670322&ll=30.293878%2C59.933961&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxOTk2MjY0ODIxElrQoNC-0YHRgdC40Y8sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQkNC90LPQu9C40LnRgdC60LDRjyDQvdCw0LHQtdGA0LXQttC90LDRjywgMjgiCg3cWfJBFWC8b0I%2C&tilt=0.26053988419897295&z=16.78"
        width="100%"
        height="100%"
        
        style={{ position: 'relative' }}
      />
    </div>
  );
};

export default Ymap1;