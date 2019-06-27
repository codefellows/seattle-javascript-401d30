export default function useIsCute(name) {
  // In upcoming lectures we'll have more complicated operations here
  const cuteNames = ['kali', 'gregor', 'hound', 'khal basil','papa dimitriou', 'ginger'];

  return cuteNames.includes(name.toLowerCase()) ? `${name} is Cute` : `${name} is not Cute`;
};