export type HomeType = {
  title: string;
  desc: string;
  fullName: string;
  image: string;

  social: {
    title: string;
    url: string;
  }[];

  stats: {
    subTitle: string;
    title: string;
    total: number;
  }[];
};
