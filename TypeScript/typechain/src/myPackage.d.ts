interface Config {
  url: string;
}

declare module "myPackage" {
  /**
   *
   * @param config
   * initiation
   */
  function init(config: Config): boolean;
  function exit(code: number): number;
}
