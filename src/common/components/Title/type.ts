type OtherProps = {
  small?: boolean;
};

export type TitleProps =
  | ({
      tag: "h1" | "h2" | "h3" | "h4" | "h5";
    } & React.HTMLAttributes<HTMLHeadingElement> &
      OtherProps)
  | ({
      tag?: "p";
    } & React.HTMLAttributes<HTMLParagraphElement> &
      OtherProps)
  | ({
      tag: "span";
    } & React.HTMLAttributes<HTMLSpanElement> &
      OtherProps);
