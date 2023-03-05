export const octavesConfig = [
  {
    scale: 4,
    keys: {
      C: "z",
      "C#": "s",
      D: "x",
      "D#": "d",
      E: "c",
      F: "v",
      "F#": "g",
      G: "b",
      "G#": "h",
      A: "n",
      "A#": "j",
      B: "m",
    },
  },
  {
    scale: 5,
    keys: {
      C: "q",
      "C#": "2",
      D: "w",
      "D#": "3",
      E: "e",
      F: "r",
      "F#": "5",
      G: "t",
      "G#": "6",
      A: "y",
      "A#": "7",
      B: "u",
    },
  },
  {
    scale: 6,
    keys: {
      C: "i",
    },
  },
];

export const getOctaveKeyValues = () => {
  return octavesConfig.reduce((prev, curr) => {
    return [...prev, ...Object.values(curr.keys)];
  }, []);
};
