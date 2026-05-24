
export type custFadeLeftType = {
  hidden: {
    opacity: number;
    y: number;
  };
  visible: (delay: number) => {
    opacity: number;
    y: number;
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
