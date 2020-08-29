declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.webp' {
  const value: string;
  export = value;
}

declare module '*.mp3' {
  const value: string;
  export = value;
}
