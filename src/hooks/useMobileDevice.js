export default function useMobileDevice() {
  //
  // A tester en prod sur des vrais device
  //
  // function checkIfMobileDevice() {
  //   return (
  //     typeof window.orientation !== 'undefined' ||
  //     navigator.userAgent.indexOf('IEMobile') !== -1
  //   );
  // }

  // hack simple
  const isMobile = window.innerWidth <= 500;

  return [isMobile];
}
