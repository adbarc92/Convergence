type Sprite = [
  HTMLCanvasElement | HTMLImageElement,
  number,
  number,
  number,
  number
];

const createSprite = (
  img: HTMLCanvasElement | HTMLImageElement,
  x: number,
  y: number,
  w: number,
  h: number
): Sprite => {
  return [img, x, y, w, h];
};

const loadImage = (imagePath: string): Promise<HTMLImageElement> => {
  return new Promise(resolve => {
    const image: HTMLImageElement = new Image();
    image.onload = () => {
      resolve(image);
    };
    image.src = imagePath;
  });
};
