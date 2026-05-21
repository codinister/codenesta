export type HomeType = {
  title: string;
  desc: string;
  fullname: string;
  image: string;

  social: {
    title: string;
    url: string;
  }[];

  stat: {
    sub_title: string;
    title: string;
    total: number;
  }[];
}[]
