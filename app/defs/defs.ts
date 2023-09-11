export type Service = {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  price: string;
  description: {
    h1: string;
    about: string;
    reasons: string[];
    summary: string;
  };
};
