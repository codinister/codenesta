
export type custFadeLeftType = {
  hidden: {
    opacity: number;
    x: number;
  };
  visible: (delay: number) => {
    opacity: number;
    x: number;
    transition: {
      delay: number;
      ease: 'easeOut';
      duration: number;
    };
  };
};


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
