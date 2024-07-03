

const YMa2 = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', border: "none", width: "100%", height: "100%" }}>
      <a
        href="https://yandex.by/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
      >
        Санкт‑Петербург
      </a>
      <a
        href="https://yandex.by/maps/2/saint-petersburg/house/kirochnaya_ulitsa_36b/Z0kYdQFkTUEOQFtjfXV1dXhnbQ==/?azimuth=6.25482380670322&ll=30.364449%2C59.944450&tilt=0.26053988419897295&utm_medium=mapframe&utm_source=maps&z=16.78"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
      >
        Кирочная улица, 36Б — Яндекс Карты
      </a>
      <iframe
        src="https://yandex.by/map-widget/v1/?azimuth=6.25482380670322&ll=30.364449%2C59.944450&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjIyNTM0NTM5Ek7QoNC-0YHRgdC40Y8sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQmtC40YDQvtGH0L3QsNGPINGD0LvQuNGG0LAsIDM20JEiCg1m6vJBFR3Hb0I%2C&tilt=0.26053988419897295&z=16.78"
        width="100%"
        height="100%"
        // allowFullScreen
        style={{ position: 'relative' }}
      ></iframe>
    </div>
  );
};

export default YMa2;