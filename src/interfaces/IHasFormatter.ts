/**
 * IHasFormatter
 */
export interface IHasFormatter {
  /**
   * format
   * @returns A description for the specified instanciated object with all of its attributes.
   */
  format(): string;
}
