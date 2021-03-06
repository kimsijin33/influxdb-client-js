import {Cancellable} from '../results'
import {FluxTableMetaData} from './FluxTableMetaData'

/**
 * Observes results of a flux query.
 */
export interface FluxResultObserver<T> {
  /**
   * Inform about a next record in a table.
   */
  next(row: T, tableMeta: FluxTableMetaData): void
  /**
   * Signalizes processing error.
   */
  error(error: Error): void
  /**
   * Signalizes completition.
   */
  complete(): void
  /**
   * Setups cancellable that can abort flux result processing.
   */
  useCancellable?: (cancellable: Cancellable) => void
}
