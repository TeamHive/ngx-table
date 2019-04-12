/**
 * Inputs for #ngx-prism/core
 * https://www.npmjs.com/package/@ngx-prism/core
 */
export interface SupportingSource {
  /**
   * The name of the file to display
   */
  name: string;
  /**
   * The language for highlighting (javascript, html, css)
   */
  language: string;
  /**
   * The content of the file to show
   */
  content: string
}
