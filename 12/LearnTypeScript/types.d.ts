declare module 'qs' {
  interface StringifyOptions {
    addQueryPrefix?: boolean;
  }
  interface ParseOptions {
    ignoreQueryPrefix?: boolean;
  }

  function stringify(object: any, options?: StringifyOptions): string;
  function parse<T = any>(str: string, options?: ParseOptions): T;
}
