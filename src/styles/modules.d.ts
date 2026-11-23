declare module '*.module.scss' {
  const classes: Readonly<Record<string, string>>;
  export = classes;
}

declare module '*.scss' {}
